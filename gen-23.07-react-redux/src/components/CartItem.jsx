import { formatCurrency } from "../services/format.js";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CartItem({ product, qty }) {
  const { id, name, image, price } = product;
  const [quantity, setQuantity] = useState(qty);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const index = cart.findIndex((item) => item.product.id === id);
    setCart([
      ...cart.slice(0, index),
      {
        ...cart[index],
        qty: quantity,
      },
      ...cart.slice(index + 1),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  const handlePlusClick = () => {
    if (quantity < 100) setQuantity((prevState) => prevState + 1);
  };
  const handleMinusClick = () => {
    if (quantity > 1) setQuantity((prevState) => prevState - 1);
  };
  const handleDeleteClick = () => {
    const index = cart.findIndex((item) => item.product.id === id);
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  return (
    <>
      <div className="h-24 w-24 bg-dark-100">
        <img
          src={image[0]}
          alt={name}
          className="h-full w-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col justify-around">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">{name}</h2>
          <button
            type="button"
            title="Remove"
            className="cursor-pointer"
            onClick={handleDeleteClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-fit text-xs">
            <div className="flex aspect-square h-full items-center justify-center border border-dark-200">
              <span className="text-center text-sm">{quantity}</span>
            </div>
            <div className="flex h-full flex-col">
              <button
                type="button"
                role="button"
                title="Plus"
                onClick={handlePlusClick}
                className="h-full border border-l-0 border-dark-200 px-2 transition-colors md:hover:bg-dark-100 md:active:bg-dark-200"
              >
                +
              </button>
              <button
                type="button"
                role="button"
                title="Minus"
                onClick={handleMinusClick}
                className="h-full border border-l-0 border-t-0 border-dark-200 px-2 transition-colors md:hover:bg-dark-100 md:active:bg-dark-200"
              >
                -
              </button>
            </div>
          </div>
          <p className="inline-block text-sm sm:text-base">
            {formatCurrency(price * quantity)}
          </p>
        </div>
      </div>
    </>
  );
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  qty: PropTypes.number.isRequired,
};

export default CartItem;
