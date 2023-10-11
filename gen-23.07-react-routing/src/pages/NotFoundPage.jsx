import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | edge";
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-dark-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-2 h-36 w-36"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
      <p className="mb-8 text-center text-xl">
        Sorry, we can&#39;t seem to find <br /> the page you&#39;re looking for.
      </p>
      <Link
        to="/"
        className="bg-dark-500 px-4 py-2 text-dark-100 transition-colors duration-300 hover:bg-dark-400"
      >
        Back to Catalog
      </Link>
    </div>
  );
}

export default NotFoundPage;
