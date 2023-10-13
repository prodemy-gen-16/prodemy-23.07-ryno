import { useEffect, useState } from "react";

import data from "../data/products.json";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import ProductFilter from "../components/ProductFilter.jsx";
import PageTitle from "../components/PageTitle.jsx";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState({ query: "", order: "latest" });
  const [filter, setFilter] = useState({ query: "", order: "latest" });

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
    setProducts([...data.products]);

    switch (filter.order) {
      case "lowest":
        setProducts((prevState) => prevState.sort((a, b) => a.price - b.price));
        break;
      case "highest":
        setProducts((prevState) => prevState.sort((a, b) => b.price - a.price));
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
  }, [filter]);

  const handleInputsChange = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handleInputsSubmit = (event) => {
    event.preventDefault();
    setFilter(inputs);
  };

  return (
    <>
      <Hero />
      <PageTitle
        id="catalog"
        className="-mt-24 pt-24 md:mt-[calc(300px-96px+12px)] md:pt-24 lg:mt-[calc(600px-96px+12px)]"
      >
        Catalog
      </PageTitle>
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
