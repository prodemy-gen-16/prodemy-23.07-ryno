import { useState } from "react";
import PropTypes from "prop-types";

import { formatCurrency } from "../services/format.js";

function ProductInfo({ product }) {
  const { name, price, description } = product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleQuantityBlur = () => {
    if (quantity > 100) setQuantity(100);
    else if (quantity < 1) setQuantity(1);
  };
  const handlePlusClick = () => {
    if (quantity < 100) setQuantity((prevState) => prevState + 1);
  };
  const handleMinusClick = () => {
    if (quantity > 1) setQuantity((prevState) => prevState - 1);
  };

  return (
    <div className="md:basis-1/2">
      <h1 className="mb-1 text-2xl font-bold uppercase text-primary-100">
        {name}
      </h1>
      <p className="text-lg">{formatCurrency(price)}</p>
      <p className="mt-6">{description}</p>

      <form action="" className="mt-7 flex items-center">
        <label htmlFor="quantity"></label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={handleQuantityBlur}
          min="1"
          max="100"
          className="h-[60px] w-16 border border-dark-200 px-3 py-4 text-center [appearance:textfield] focus:border-primary-100 focus:ring-primary-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          title="Quantity"
          placeholder="Qty"
          required
        />
        <div className="mr-4 flex h-[60px] flex-col">
          <button
            type="button"
            role="button"
            title="Plus"
            onClick={handlePlusClick}
            className="h-full border border-l-0 border-dark-200 px-2 transition-colors active:bg-dark-200 md:hover:bg-dark-100"
          >
            +
          </button>
          <button
            type="button"
            role="button"
            title="Minus"
            onClick={handleMinusClick}
            className="h-full border border-l-0 border-t-0 border-dark-200 px-2 transition-colors active:bg-dark-200 md:hover:bg-dark-100"
          >
            -
          </button>
        </div>
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
