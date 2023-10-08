function Hero() {
  return (
    <section className="absolute left-0 right-0 -mt-6 mb-14 hidden bg-hero bg-cover bg-center bg-no-repeat md:block md:h-[300px] lg:h-[600px]">
      <div className="mx-auto flex h-full max-w-[1340px] items-center justify-between px-5 md:px-16">
        <div className="hero-text">
          <p className="mb-8 text-4xl font-bold lg:mb-12 lg:text-5xl lg:leading-tight">
            Exclusive Furniture
            <br />& Accessories
          </p>
          <a
            href={"#catalog"}
            className="bg-dark-500 px-10 py-3 text-base font-medium text-dark-100 transition-colors duration-300 hover:bg-dark-400 active:bg-black lg:px-20 lg:py-4"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
