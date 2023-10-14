import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import ProductList from "../components/ProductList.jsx";
import ProductFilter from "../components/ProductFilter.jsx";
import PageTitle from "../components/PageTitle.jsx";
import { useProduct } from "../hooks/useProduct.js";
import { useSearchParams } from "react-router-dom";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState({ query: "", order: "latest" });
  const [filter, setFilter] = useState({ query: "", order: "latest" });
  const { data, error, isLoading } = useProduct();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Catalog | edge";
  }, []);

  useEffect(() => {
    if (!inputs.query) setFilter((prevState) => ({ ...prevState, query: "" }));
  }, [inputs.query]);

  useEffect(() => {
    setFilter((prevState) => ({ ...prevState, order: inputs.order }));
  }, [inputs.order]);

  useEffect(() => {
    if (searchParams.get("sort")) {
      setInputs((prevState) => ({
        ...prevState,
        order: searchParams.get("sort"),
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      setProducts([...data]);

      switch (filter.order) {
        case "lowest":
          setProducts((prevState) =>
            prevState.sort((a, b) => a.price - b.price),
          );
          break;
        case "highest":
          setProducts((prevState) =>
            prevState.sort((a, b) => b.price - a.price),
          );
          break;
        case "latest":
          setProducts((prevState) =>
            prevState.sort(
              (a, b) => Date.parse(b.release) - Date.parse(a.release),
            ),
          );
      }

      if (filter.query)
        setProducts((prevState) =>
          prevState.filter((product) =>
            product.name.toLowerCase().includes(filter.query.toLowerCase()),
          ),
        );
    }
  }, [data, filter]);

  const handleInputsChange = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handleInputsSubmit = (event) => {
    event.preventDefault();
    setFilter(inputs);
  };

  if (isLoading || error)
    return (
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <HashLoader color="#ad5547" loading></HashLoader>
      </div>
    );

  if (products)
    return (
      <>
        <PageTitle id="catalog">Catalog</PageTitle>
        <ProductFilter
          filter={inputs}
          onInputsChange={handleInputsChange}
          onInputsSubmit={handleInputsSubmit}
        />
        <ProductList products={products} />
      </>
    );
}

export default CatalogPage;
