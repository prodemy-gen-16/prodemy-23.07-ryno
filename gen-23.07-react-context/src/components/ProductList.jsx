import PropTypes from "prop-types";
import ProductCard from "./ProductCard.jsx";

function ProductList({ products }) {
  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-x-12 md:gap-y-10 xl:grid-cols-4">
      {productCards.length > 0 ? (
        productCards
      ) : (
        <div className="col-span-4 w-full py-20 text-center">
          No matches found.
        </div>
      )}
    </section>
  );
}

ProductList.propTypes = { products: PropTypes.array.isRequired };

export default ProductList;
