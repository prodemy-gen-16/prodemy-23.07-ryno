import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import data from "../data/products.json";
import ProductFilter from "../components/ProductFilter.jsx";
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle.jsx";

function CatalogPage() {
  const [filter, setFilter] = useState({ nameFilter: "", sortBy: "latest" });

  useEffect(() => {
    document.title = "Exclusive Furniture & Accessories | edge";
  }, []);

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
      <PageTitle id="catalog" className="md:mt-[332px] lg:mt-[632px]">
        Catalog
      </PageTitle>
      <ProductFilter filter={filter} onFilterChange={handleFilterChange} />
      <ProductList products={products} />
    </>
  );
}

export default CatalogPage;
