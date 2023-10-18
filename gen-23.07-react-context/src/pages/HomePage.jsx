import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";

function HomePage() {
  useEffect(() => {
    document.title = "Exclusive Furniture & Accessories | edge";
  }, []);

  const bg = {
    featured:
      'bg-[url("https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/869/0986920_PE817400_S5.webp")]',
    latest:
      'bg-[url("https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/904/0990411_PE818914_S5.webp")]',
    cheapest:
      'bg-[url("https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/239/1123973_PE874943_S5.webp")]',
  };

  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
        <Link
          to="/catalog?sort=featured"
          className={`${bg.featured} flex h-32 bg-dark-500 bg-cover bg-center sm:h-40 md:col-span-2 lg:h-56`}
        >
          <div className="flex w-full items-center justify-center bg-dark-500 bg-opacity-50 transition-all duration-500 hover:bg-opacity-75">
            <h2 className="text-2xl font-semibold text-dark-100 drop-shadow-2xl sm:text-3xl lg:text-5xl">
              Popular Items
            </h2>
          </div>
        </Link>
        <Link
          to="/catalog?sort=latest"
          className={`${bg.latest} flex h-32 bg-dark-500 bg-cover bg-center sm:h-40 lg:h-56`}
        >
          <div className="flex w-full items-center justify-center bg-dark-500 bg-opacity-50 transition-all duration-500 hover:bg-opacity-75">
            <h2 className="text-2xl font-semibold text-dark-100 drop-shadow-2xl sm:text-3xl lg:text-5xl">
              New Arrivals
            </h2>
          </div>
        </Link>
        <Link
          to="/catalog?sort=lowest"
          className={`${bg.cheapest} flex h-32 bg-dark-500 bg-cover bg-center sm:h-40 lg:h-56`}
        >
          <div className="flex w-full items-center justify-center bg-dark-500 bg-opacity-50 transition-all duration-500 hover:bg-opacity-75">
            <h2 className="text-2xl font-semibold text-dark-100 drop-shadow-2xl sm:text-3xl lg:text-5xl">
              Most Affordable
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
