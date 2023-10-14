import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navigation({ isMenuOpen, onCloseMenu }) {
  const className = isMenuOpen
    ? "opacity-100 left-0"
    : "opacity-0 -left-[100vw]";

  return (
    <nav
      id="navigation"
      className={`${className} fixed top-0 z-50 flex h-screen w-screen flex-col overflow-hidden bg-white px-10 py-12 text-xl transition-[left,opacity] duration-300 sm:static sm:flex sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:p-0 sm:opacity-100`}
    >
      <button
        id="close-button"
        type="button"
        role="button"
        title="Close"
        className="absolute left-5 top-5 rounded p-1 text-xl text-dark-400 transition-colors hover:bg-dark-100 active:bg-dark-200 sm:hidden"
        onClick={onCloseMenu}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Link
        to="/catalog"
        onClick={onCloseMenu}
        className="my-6 text-center font-light uppercase tracking-wider sm:m-0 sm:mx-2 sm:rounded-full sm:px-3 sm:py-1 sm:text-base sm:font-normal sm:uppercase sm:hover:bg-primary-100 sm:hover:text-dark-100 lg:mx-8"
      >
        Catalog
      </Link>
      <hr className="border-t-dark-200 sm:hidden" />
      <Link
        to="/about"
        onClick={onCloseMenu}
        className="my-6 text-center font-light uppercase tracking-wider sm:m-0 sm:mx-2 sm:rounded-full sm:px-3 sm:py-1 sm:text-base sm:font-normal sm:uppercase sm:hover:bg-primary-100 sm:hover:text-dark-100 lg:mx-8"
      >
        About Us
      </Link>
      <hr className="border-t-dark-200 sm:hidden" />
      <Link
        to="/contacts"
        onClick={onCloseMenu}
        className="my-6 text-center font-light uppercase tracking-wider sm:m-0 sm:mx-2 sm:rounded-full sm:px-3 sm:py-1 sm:text-base sm:font-normal sm:uppercase sm:hover:bg-primary-100 sm:hover:text-dark-100 lg:mx-8"
      >
        Contacts
      </Link>
    </nav>
  );
}

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

export default Navigation;
