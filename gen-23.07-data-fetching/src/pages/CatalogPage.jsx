import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { HashLoader } from "react-spinners";

import { fetchProduct } from "../services/api.js";
import PageTitle from "../components/PageTitle.jsx";
import ProductFilter from "../components/ProductFilter.jsx";
import ProductList from "../components/ProductList.jsx";

function CatalogPage() {
  const [inputs, setInputs] = useState({ query: "", order: "latest" });
  const [filter, setFilter] = useState({ query: "", order: "latest" });
  const { data, error, isLoading } = useSWR("/products", fetchProduct);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Catalog | edge";
  }, []);

  useEffect(() => {
    const order = searchParams.get("sort");
    if (order) {
      setInputs((prevState) => ({
        ...prevState,
        order,
      }));
      setFilter((prevState) => ({
        ...prevState,
        order,
      }));
    }
  }, [searchParams]);

  let products = [];
  if (data) {
    products = [...data];
    if (filter.query) {
      products = products.filter(({ name }) =>
        name.toLowerCase().includes(filter.query.toLowerCase()),
      );
    }
    switch (filter.order) {
      case "lowest":
        products = products.sort((a, b) => a.price - b.price);
        break;
      case "highest":
        products = products.sort((a, b) => b.price - a.price);
        break;
      case "latest":
        products = products.sort(
          (a, b) => Date.parse(b.release) - Date.parse(a.release),
        );
    }
  }

  const handleInputsChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

    if (event.target.name === "order" || event.target.value === "") {
      setFilter((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleInputsSubmit = (event) => {
    event.preventDefault();
    setFilter(inputs);
  };

  return (
    <>
      <PageTitle id="catalog">Catalog</PageTitle>
      <ProductFilter
        filter={inputs}
        onInputsChange={handleInputsChange}
        onInputsSubmit={handleInputsSubmit}
      />
      {isLoading || error ? (
        <div className="flex flex-grow items-center justify-center">
          <HashLoader color="#ad5547" loading></HashLoader>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}

export default CatalogPage;
