import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import { formatCurrency } from "../services/format.js";
import { CartContext } from "../context/CartContext.jsx";

function ProductInfo({ product }) {
  const { id, name, price, description } = product;
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantity(~~event.target.value);
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
  const handleCartSubmit = (event) => {
    event.preventDefault();

    const newItem = { product, qty: quantity };
    const index = cart.findIndex((item) => item.product.id === id);
    if (index === -1) setCart([...cart, newItem]);
    else
      setCart([
        ...cart.slice(0, index),
        {
          ...cart[index],
          qty: cart[index].qty + newItem.qty,
        },
        ...cart.slice(index + 1),
      ]);

    toast.success("Added to cart.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="md:basis-1/2">
      <h1 className="mb-1 text-2xl font-bold uppercase text-primary-100">
        {name}
      </h1>
      <p className="text-lg">{formatCurrency(price)}</p>
      <p className="mt-6">{description}</p>

      <form onSubmit={handleCartSubmit} className="mt-7 flex items-center">
        <div className="mr-4 flex h-[60px]">
          <input
            type="number"
            name="quantity"
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

        <button
          type="submit"
          role="button"
          title="Add to cart"
          className="bg-dark-500 px-8 py-4 text-lg text-dark-100 transition-colors md:hover:bg-dark-400 md:active:bg-black"
        >
          ADD TO CART
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
