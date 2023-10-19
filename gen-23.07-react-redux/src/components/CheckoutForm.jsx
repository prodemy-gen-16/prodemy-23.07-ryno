import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import { phoneRegex } from "../services/format.js";
import { CartContext } from "../context/CartContext.jsx";
import { postOrder } from "../services/api.js";
import { generateOrderId } from "../services/generator.js";

function CheckoutForm() {
  const { cart, setCart } = useContext(CartContext);

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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const id = generateOrderId();
    const items = cart.map((item) => ({
      productId: item.product.id,
      name: item.product.name,
      price: item.product.price,
      qty: item.qty,
      subtotal: item.qty * item.product.price,
    }));
    const total = cart.reduce(
      (sum, item) => sum + item.product.price * item.qty,
      0,
    );
    const time = new Date().toLocaleString();

    const payload = { id, time, ...data, items, total };
    postOrder(payload).then(() => {
      setCart([]);
      reset();

      toast.success("Checkout Successful", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        spellCheck="false"
        noValidate={true}
        className="relative -left-[calc(50vw-50%)] h-full w-screen bg-dark-100 p-5 md:static md:w-full md:basis-1/3 lg:p-8"
      >
        <h2 className="mb-4 text-xl font-medium">Delivery</h2>

        <div className="mb-1 flex items-center justify-between">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        <input
          type="text"
          id="name"
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
          {errors.phone && (
            <span className="text-sm text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <input
          type="number"
          id="phone"
          {...register("phone")}
          min={0}
          className="mb-4 w-full rounded-md [appearance:textfield] focus:border-primary-100 focus:ring-primary-100 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <div className="mb-1 flex items-center justify-between">
          <label htmlFor="address" className="font-medium">
            Address
          </label>
          {errors.address && (
            <span className="text-sm text-red-500">
              {errors.address.message}
            </span>
          )}
        </div>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
        />

        <div>
          <div className="mb-1 flex items-center justify-between">
            <label htmlFor="delivery" className="font-medium">
              Delivery Method
            </label>
            {errors.delivery && (
              <span className="text-sm text-red-500">
                {errors.delivery.message}
              </span>
            )}
          </div>
          <select
            {...register("delivery")}
            id="delivery"
            defaultValue=""
            className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
          >
            <option value="" disabled>
              -- Select Option --
            </option>
            <option value="regular">Regular Delivery</option>
            <option value="sameday">Same Day Delivery</option>
            <option value="instant">Instant Delivery</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-dark-500 py-4 text-lg font-medium text-dark-100 transition-colors duration-300 hover:bg-dark-400 disabled:bg-dark-200"
          disabled={cart.length < 1}
        >
          Check Out
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default CheckoutForm;
