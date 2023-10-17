import { Fragment } from "react";
import QuantityInput from "./QuantityInput.jsx";
import { formatCurrency } from "../services/format.js";

function CartItemList() {
  const cartItems = [
    {
      id: "hv2bJg6Z",
      name: "Havberg",
      price: 7495000,
      image:
        "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/708/1070880_PE854782_S3.webp",
      quantity: 1,
    },
    {
      id: "nQ5LqSnS",
      name: "Landskrona",
      price: 6995000,
      image:
        "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/904/0990412_PE818930_S4.webp",
      quantity: 1,
    },
  ];

  return (
    <div className="mt-6 grid h-full grid-cols-[auto,1fr] gap-x-6 gap-y-8 md:mt-0 md:basis-2/3">
      {cartItems.map(({ id, name, price, image }) => (
        <Fragment key={id}>
          <div className="h-24 w-24 bg-dark-100">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col justify-around">
            <h2 className="text-xl font-medium">{name}</h2>
            <div className="flex items-center justify-between">
              <QuantityInput className="inline-block h-10 w-fit text-xs" />
              <p className="inline-block">{formatCurrency(price)}</p>
            </div>
          </div>
        </Fragment>
      ))}
      <hr className="col-span-2" />
      <h2 className="text-xl font-medium">Total</h2>
      <p className="mb-6 text-right">
        {formatCurrency(
          cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        )}
      </p>
    </div>
  );
}

export default CartItemList;
