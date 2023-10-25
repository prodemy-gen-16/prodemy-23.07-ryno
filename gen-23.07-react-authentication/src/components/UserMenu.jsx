import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../redux/authSlice.js";
import { useEffect, useState } from "react";

function UserMenu() {
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => setDropdown(false));
    return () =>
      document.removeEventListener("click", () => setDropdown(false));
  }, []);

  const handleToggleDropdown = (event) => {
    event.stopPropagation();
    setDropdown(!dropdown);
  };

  const handleLogoutClick = () => {
    dispatch(removeAuth());
    navigate("/login");
  };

  return (
    <nav className="flex items-center">
      {user?.name ? (
        <>
          <Link
            to="/cart"
            className="relative ml-2 rounded p-1 transition-colors hover:bg-dark-100 active:bg-dark-200"
            role="button"
            type="button"
            title="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            {cart.length > 0 && (
              <div className="absolute -right-[6px] -top-[6px] flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-dark-100 bg-red-600 text-[10px] text-dark-100">
                <p>{cart.reduce((sum, item) => sum + item.qty, 0)}</p>
              </div>
            )}
          </Link>
          <div className="relative">
            <button
              className={`${
                dropdown && "bg-dark-100 shadow"
              } relative ml-2 rounded p-1 transition-colors hover:bg-dark-100 active:bg-dark-200`}
              role="button"
              type="button"
              title="User"
              onClick={handleToggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            {dropdown && (
              <div
                className="absolute right-0 top-full mt-2 rounded border bg-dark-100 p-2 shadow"
                onBlur={handleToggleDropdown}
              >
                <Link
                  className="my-1 block cursor-pointer whitespace-nowrap px-4 text-right font-medium capitalize transition-colors hover:text-primary-100"
                  to={`/users/${user.id}`}
                >
                  {user?.name.toLowerCase()}
                </Link>
                <hr className="my-2 border-dark-200 text-right" />
                <Link
                  className="my-1 block cursor-pointer whitespace-nowrap px-4 text-right transition-colors hover:text-primary-100"
                  to="/orders"
                >
                  Order History
                </Link>
                <div
                  className="my-1 block cursor-pointer whitespace-nowrap px-4 text-right transition-colors hover:text-primary-100"
                  onClick={handleLogoutClick}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <Link
          to="/login"
          className="ml-2 rounded p-1 transition-colors hover:bg-dark-100 active:bg-dark-200"
          role="button"
          type="button"
          title="Login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </Link>
      )}
    </nav>
  );
}

export default UserMenu;
