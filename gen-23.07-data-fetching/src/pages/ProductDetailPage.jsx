import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HashLoader } from "react-spinners";

import ProductImages from "../components/ProductImages.jsx";
import ProductInfo from "../components/ProductInfo.jsx";
import { useProduct } from "../hooks/useProduct.js";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, error, isLoading } = useProduct(id);

  useEffect(() => {
    if (error?.response?.status === 404)
      navigate("/not-found", { replace: true });
  }, [error, navigate]);

  useEffect(() => {
    if (product) {
      const { name } = product;
      document.title = `${name} | edge`;
    }
  }, [product]);

  if (isLoading || error)
    return (
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <HashLoader color="#ad5547" loading></HashLoader>
      </div>
    );

  if (product)
    return (
      <>
        <HashLink to="/#catalog" className="flex w-fit items-center">
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
        </HashLink>

        <section className="mt-5 flex flex-col gap-2 md:flex-row md:gap-8 lg:gap-14">
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </section>
      </>
    );
}

export default ProductDetailPage;
