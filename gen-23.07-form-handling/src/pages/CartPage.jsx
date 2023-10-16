import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PageTitle from "../components/PageTitle.jsx";
import QuantityInput from "../components/QuantityInput.jsx";
import { formatCurrency, phoneRegex } from "../services/format.js";

function CartPage() {
  useEffect(() => {
    document.title = "Shopping Cart | edge";
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    phone: yup.string().required("Required").matches(phoneRegex, "Invalid"),
    address: yup.string().required("Required"),
    delivery: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
    <>
      <PageTitle>Shopping Cart</PageTitle>
      <section className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
        <div className="mt-6 grid h-fit grid-cols-[auto,1fr] gap-x-6 gap-y-8 md:mt-0 md:basis-2/3">
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
          <p className="col-span-2 mb-6 text-right">
            {formatCurrency(14490000)}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          spellCheck="false"
          className="relative -left-[calc(50vw-50%)] h-fit w-screen bg-dark-100 p-5 md:static md:w-full md:basis-1/3 lg:p-8"
        >
          <h2 className="mb-4 text-xl font-medium">Delivery</h2>

          <div className="mb-1 flex items-center justify-between">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <span className="text-sm text-red-500">{errors.name?.message}</span>
          </div>
          <input
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            {...register("name")}
            className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
          />

          <div className="mb-1 flex items-center justify-between">
            <label htmlFor="phone" className="font-medium">
              Phone{" "}
              <span className="text-sm font-normal text-dark-200">
                (0812345678)
              </span>
            </label>
            <span className="text-sm text-red-500">
              {errors.phone?.message}
            </span>
          </div>
          <input
            autoComplete="off"
            type="number"
            id="phone"
            name="phone"
            {...register("phone")}
            min={0}
            className="mb-4 w-full rounded-md [appearance:textfield] focus:border-primary-100 focus:ring-primary-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />

          <div className="mb-1 flex items-center justify-between">
            <label htmlFor="address" className="font-medium">
              Address
            </label>
            <span className="text-sm text-red-500">
              {errors.address?.message}
            </span>
          </div>
          <input
            autoComplete="off"
            type="text"
            id="address"
            name="address"
            {...register("address")}
            className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
          />

          <div className="mb-4">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-medium">Delivery Method</span>
              <span className="text-sm text-red-500">
                {errors.delivery?.message}
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="regular-delivery"
                name="delivery"
                {...register("delivery")}
                value="regular"
                className="text-primary-100 checked:ring-1 checked:ring-dark-100"
              />
              <label htmlFor="regular-delivery" className="ml-2">
                Regular Delivery
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="sameday-delivery"
                name="delivery"
                {...register("delivery")}
                value="sameday"
                className="text-primary-100 checked:ring-1 checked:ring-dark-100"
              />
              <label htmlFor="sameday-delivery" className="ml-2">
                Same Day Delivery
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="instant-delivery"
                name="delivery"
                {...register("delivery")}
                value="instant"
                className="text-primary-100 checked:ring-1 checked:ring-dark-100"
              />
              <label htmlFor="instant-delivery" className="ml-2">
                Instant Delivery
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-dark-500 py-4 text-lg font-medium text-dark-100 transition-colors duration-300 hover:bg-dark-400"
          >
            Check Out
          </button>
        </form>
      </section>
    </>
  );
}

export default CartPage;
