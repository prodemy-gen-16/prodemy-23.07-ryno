import { useContext } from "react";
import { formatCurrency } from "../services/format.js";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";

function CartList() {
  const { cart } = useContext(CartContext);

  return (
    <div className="mt-6 grid h-full grid-cols-[auto,1fr] gap-x-4 gap-y-8 sm:gap-x-8 md:mt-0 md:basis-2/3">
      {cart.length > 0 ? (
        cart.map(({ product, qty }) => (
          <CartItem key={product.id} product={product} qty={qty} />
        ))
      ) : (
        <h2 className="col-span-2 w-full py-10 text-center">Cart is empty.</h2>
      )}
      <hr className="col-span-2" />
      <h2 className="text-xl font-medium">Total</h2>
      <p className="mb-6 text-right">
        {formatCurrency(
          cart.reduce((sum, item) => sum + item.product.price * item.qty, 0),
        )}
      </p>
    </div>
  );
}

export default CartList;
