import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import illustration from "../assets/auth.svg";
import { login } from "../services/api.js";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/authSlice.js";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email Invalid").required("Required"),
    password: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogin = (data) => {
    login(data)
      .then((response) => {
        dispatch(setAuth(response.data));
        navigate("/catalog");
      })
      .catch((error) => {
        const message = error.response
          ? "Your credentials are incorrect"
          : error.message;
        toast.error(message);
        reset();
      });
  };

  return (
    <div className="my-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
      <div className="mx-auto w-96 max-w-full flex-none px-6 lg:basis-1/2 lg:p-0">
        <img src={illustration} className="w-full" alt="Login Illustration" />
      </div>
      <form
        onSubmit={handleSubmit(onLogin)}
        autoComplete="off"
        spellCheck="false"
        noValidate={true}
        className="mx-auto w-full max-w-sm flex-none lg:mt-0 lg:basis-1/2"
      >
        <h1 className="mb-4 text-center text-3xl font-bold uppercase text-primary-100 lg:text-4xl">
          Login
        </h1>
        <div className="mb-1 flex items-center justify-between">
          <label htmlFor="email" className="block font-medium">
            Email:
          </label>
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <input
          autoFocus={true}
          type="email"
          id="email"
          {...register("email")}
          className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
        />

        <div className="mb-1 flex items-center justify-between">
          <label htmlFor="password" className="block font-medium">
            Password:
          </label>
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="mb-4 w-full rounded-md focus:border-primary-100 focus:ring-primary-100"
        />

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-dark-500 py-4 text-lg font-medium text-dark-100 transition-colors duration-300 hover:bg-dark-400"
        >
          LOGIN
        </button>

        <p className="mt-3 text-center">
          Don&#39;t have an account?{" "}
          <Link
            to="/sign-up"
            className="font-medium text-primary-100 underline"
          >
            Sign Up
          </Link>
        </p>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default LoginPage;
