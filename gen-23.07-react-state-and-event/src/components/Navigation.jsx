import PropTypes from "prop-types";

function Navigation({ className, onCloseMenu }) {
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
      <a
        href="#"
        className="my-6 text-center font-light uppercase tracking-wider sm:m-0 sm:p-0 sm:px-5 sm:text-base sm:font-normal sm:uppercase sm:hover:underline sm:hover:underline-offset-4 lg:px-8"
      >
        Catalog
      </a>
      <hr className="border-t-dark-200 sm:hidden" />
      <a
        href="#"
        className="my-6 text-center font-light uppercase tracking-wider sm:m-0 sm:p-0 sm:px-5 sm:text-base sm:font-normal sm:uppercase sm:hover:underline sm:hover:underline-offset-4 lg:px-8"
      >
        About Us
      </a>
      <hr className="border-t-dark-200 sm:hidden" />
      <a
        href="#"
        className="my-6 text-center font-light uppercase tracking-wider sm:m-0 sm:p-0 sm:px-5 sm:text-base sm:font-normal sm:uppercase sm:hover:underline sm:hover:underline-offset-4 lg:px-8"
      >
        Contacts
      </a>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

export default Navigation;
