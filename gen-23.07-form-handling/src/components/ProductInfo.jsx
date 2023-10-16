import PropTypes from "prop-types";

import { formatCurrency } from "../services/format.js";
import QuantityInput from "./QuantityInput.jsx";

function ProductInfo({ product }) {
  const { name, price, description } = product;

  return (
    <div className="md:basis-1/2">
      <h1 className="mb-1 text-2xl font-bold uppercase text-primary-100">
        {name}
      </h1>
      <p className="text-lg">{formatCurrency(price)}</p>
      <p className="mt-6">{description}</p>

      <form action="" className="mt-7 flex items-center">
        <QuantityInput className="mr-4 h-[60px]" />
        <button
          type="submit"
          role="button"
          title="Add to cart"
          className="bg-dark-500 px-8 py-4 text-lg text-dark-100 transition-colors duration-300 active:bg-black md:hover:bg-dark-400"
        >
          ADD TO CART
        </button>
      </form>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
