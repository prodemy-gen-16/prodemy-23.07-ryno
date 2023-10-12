import { useEffect } from "react";

import notFoundIllustration from "../assets/not-found.svg";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | edge";
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-dark-300">
      <img
        src={notFoundIllustration}
        alt="Page Not Found"
        className="mb-6 w-28 sm:w-40"
      />
      <p className="mb-8 text-center text-xl leading-snug sm:text-3xl sm:leading-snug">
        Sorry, we can&#39;t seem <br /> to find the page you&#39;re
        <br /> looking for.
      </p>
    </div>
  );
}

export default NotFoundPage;
