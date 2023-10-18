import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ProductImages({ product }) {
  const { id, name, image } = product;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const thumbnailsContainer = document.querySelector("#thumbnails-container");
    const containerWidth = thumbnailsContainer.getBoundingClientRect().width;
    const elementWidth = 0.22 * containerWidth;
    const gap = 0.03 * containerWidth;

    const scrollStart = thumbnailsContainer.scrollLeft;
    const scrollEnd = scrollStart + containerWidth;

    const elementStart = activeIndex * (elementWidth + gap);
    const elementEnd = elementStart + elementWidth;

    if (elementStart < scrollStart) {
      thumbnailsContainer.scrollTo({
        left: elementStart,
        behavior: "smooth",
      });
    } else if (elementEnd > scrollEnd) {
      thumbnailsContainer.scrollTo({
        left: elementEnd - containerWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleLeftButtonClick = () => {
    if (activeIndex > 0) setActiveIndex((prevState) => prevState - 1);
    else setActiveIndex(image.length - 1);
  };
  const handleRightButtonClick = () => {
    if (activeIndex < image.length - 1)
      setActiveIndex((prevState) => prevState + 1);
    else setActiveIndex(0);
  };
  const handleThumbnailClick = (event) => {
    setActiveIndex(image.indexOf(event.target.src));
  };

  const thumbnails = image.map((url, index) => (
    <div
      onClick={handleThumbnailClick}
      key={`thumbnail-${id}-${index}`}
      className={`thumbnail-image w-full shrink-0 cursor-pointer snap-start bg-dark-100 transition-opacity duration-300 md:w-[22%] ${
        index !== activeIndex && "md:opacity-50"
      }`}
    >
      <img
        className="aspect-square w-full object-cover mix-blend-multiply"
        src={url}
        alt={name}
      />
    </div>
  ));

  return (
    <div className="flex flex-col items-center gap-4 md:basis-1/2">
      <div
        style={{
          backgroundImage: `url(${image[activeIndex]})`,
        }}
        className="relative aspect-square w-full overflow-hidden bg-dark-100 bg-cover bg-blend-multiply duration-500"
      >
        <button
          onClick={handleLeftButtonClick}
          title="Slide Left"
          className="absolute bottom-0 left-0 top-0 z-10 flex w-12 items-center justify-center opacity-50 transition-opacity active:opacity-100 md:bg-gradient-to-r md:from-dark-500/25 md:to-transparent md:opacity-30 md:hover:opacity-100"
        >
          <span className="flex items-center justify-center rounded-full bg-dark-400 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-dark-100"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button
          onClick={handleRightButtonClick}
          title="Slide Right"
          className="absolute bottom-0 right-0 top-0 z-10 flex w-12 items-center justify-center opacity-50 transition-opacity active:opacity-100 md:bg-gradient-to-l md:from-dark-500/25 md:to-transparent md:opacity-30 md:hover:opacity-100"
        >
          <span className="flex items-center justify-center rounded-full bg-dark-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-dark-100"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          id="thumbnails-container"
          className="hidden snap-x snap-mandatory overflow-auto md:flex md:gap-[4%]"
        >
          {thumbnails}
        </div>
      </div>
    </div>
  );
}

ProductImages.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductImages;
