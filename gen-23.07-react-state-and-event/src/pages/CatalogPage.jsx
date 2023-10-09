import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import { products } from "../data/products.json";

function CatalogPage() {
  return (
    <>
      <Hero />
      <h1
        className="title mb-12 text-center text-3xl font-bold uppercase md:mt-[332px] lg:mt-[632px]"
        id="catalog"
      >
        Catalog
      </h1>
      <ProductList products={products} />
    </>
  );
}

export default CatalogPage;
