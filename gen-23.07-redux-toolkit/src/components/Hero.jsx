import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative -left-[calc(50vw-50%)] -mt-10 mb-8 h-32 w-screen bg-hero bg-cover bg-center bg-no-repeat md:mb-14 md:h-[300px] lg:h-[600px]">
      <div className="mx-auto flex h-full max-w-[1340px] items-center justify-between px-5 md:px-16">
        <div className="hidden md:block">
          <p className="mb-8 text-4xl font-bold lg:mb-12 lg:text-5xl lg:leading-tight">
            Exclusive Furniture
            <br />& Accessories
          </p>
          <Link
            to="/catalog"
            className="bg-dark-500 px-10 py-3 text-base font-medium text-dark-100 transition-colors duration-300 hover:bg-dark-400 active:bg-black lg:px-20 lg:py-4"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
