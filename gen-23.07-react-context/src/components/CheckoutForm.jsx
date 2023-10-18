import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneRegex } from "../services/format.js";

function CheckoutForm() {
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

  return (
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
          <span className="text-sm text-red-500">{errors.address.message}</span>
        )}
      </div>
      <input
        type="text"
        id="address"
        {...register("address")}
        className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
      />

      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-medium">Delivery Method</span>
          {errors.delivery && (
            <span className="text-sm text-red-500">
              {errors.delivery.message}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="regular-delivery"
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
  );
}

export default CheckoutForm;
