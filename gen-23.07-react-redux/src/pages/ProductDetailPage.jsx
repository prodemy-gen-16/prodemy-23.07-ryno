import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { HashLoader } from "react-spinners";
import { getProduct } from "../services/api.js";
import ProductImages from "../components/ProductImages.jsx";
import ProductInfo from "../components/ProductInfo.jsx";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/products/${id}`, getProduct);

  useEffect(() => {
    document.title = `${product?.name} | edge`;
  }, [product]);

  useEffect(() => {
    if (error?.response?.status === 404)
      navigate("/not-found", { replace: true });
  }, [error, navigate]);

  return (
    <>
      <Link to="/catalog" className="flex w-fit items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
        <p className="inline">Catalog</p>
      </Link>

      <section className="mt-5 flex flex-grow flex-col gap-2 md:flex-row md:gap-8 lg:gap-14">
        {isLoading || error ? (
          <div className="flex flex-grow items-center justify-center">
            <HashLoader color="#ad5547" loading></HashLoader>
          </div>
        ) : (
          <>
            <ProductImages product={product} />
            <ProductInfo product={product} />
          </>
        )}
      </section>
    </>
  );
}

export default ProductDetailPage;
