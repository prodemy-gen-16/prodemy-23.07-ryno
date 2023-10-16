import { useState } from "react";
import PropTypes from "prop-types";

function QuantityInput({ className }) {
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
    <div className={`${className} flex`}>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        onBlur={handleQuantityBlur}
        min="1"
        max="100"
        className="aspect-square h-full border border-dark-200 px-1 py-2 text-center [appearance:textfield] focus:border-primary-100 focus:ring-primary-100 md:px-3 md:py-4 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        title="Quantity"
        placeholder="Qty"
        required
      />
      <div className="flex h-full flex-col">
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
    </div>
  );
}

QuantityInput.propTypes = { className: PropTypes.string.isRequired };

export default QuantityInput;
