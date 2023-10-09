import logo from "../assets/logo.png";

function Brand() {
  function openMenu() {
    const nav = document.querySelector("#navigation");
    nav.classList.replace("opacity-0", "opacity-100");
    nav.classList.replace("left-[-100vw]", "left-0");
    document.body.classList.add("overflow-y-hidden");
  }

  return (
    <div className="flex items-center">
      <button
        role="button"
        type="button"
        title="Menu"
        id="menu-button"
        className="mr-3 inline rounded border-0 bg-transparent p-1 transition-colors hover:bg-dark-100 active:bg-dark-200 sm:hidden"
        onClick={openMenu}
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <a href="" className="my-auto inline-block ">
        <img src={logo} alt="edge" className="my-auto h-8" />
      </a>
    </div>
  );
}

export default Brand;
