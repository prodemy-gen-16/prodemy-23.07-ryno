import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import data from "../data/products.json";
import ProductFilter from "../components/ProductFilter.jsx";
import { useState } from "react";

function CatalogPage() {
  const [filter, setFilter] = useState({ nameFilter: "", sortBy: "featured" });

  const handleFilterChange = (event) => {
    setFilter((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  let products = [...data.products];

  if (filter.nameFilter) {
    products = products.filter(({ name }) =>
      name.toLowerCase().includes(filter.nameFilter.toLowerCase()),
    );
  }

  switch (filter.sortBy) {
    case "latest":
      products = products.sort(
        (a, b) => Date.parse(b.release) - Date.parse(a.release),
      );
      break;
    case "lowest":
      products = products.sort((a, b) => a.price - b.price);
      break;
    case "highest":
      products = products.sort((a, b) => b.price - a.price);
      break;
  }

  return (
    <>
      <Hero />
      <h1
        className="title mb-4 text-center text-3xl font-bold uppercase md:mb-8 md:mt-[332px] lg:mt-[632px]"
        id="catalog"
      >
        Catalog
      </h1>
      <ProductFilter filter={filter} onFilterChange={handleFilterChange} />
      <ProductList products={products} />
    </>
  );
}

export default CatalogPage;
