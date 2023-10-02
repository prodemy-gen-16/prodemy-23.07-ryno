/* ============================== Product Image ============================== */

let activeIndex = 0;
const display = document.querySelector("#display-image");
const thumbnails = [...document.querySelectorAll(".thumbnail-image")];
const thumbnailsContainer = document.querySelector("#thumbnails-container");

const renderProductImage = () => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.add("md:opacity-50");
  });
  thumbnails[activeIndex].classList.remove("md:opacity-50");

  display.style.left = `-${
    activeIndex * display.getBoundingClientRect().width
  }px`;
};

const renderScrollPosition = () => {
  const containerWidth = thumbnailsContainer.getBoundingClientRect().width;
  const elementWidth = thumbnails[0].getBoundingClientRect().width;
  const gap = (containerWidth - 4 * elementWidth) / 3;

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
};

const thumbnailClickHandler = (element) => {
  const newIndex = thumbnails.indexOf(element);
  if (activeIndex === newIndex) return;

  activeIndex = newIndex;
  renderProductImage();
};

const leftButtonClickHandler = () => {
  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = thumbnails.length - 1;
  }

  renderProductImage();
  renderScrollPosition();
};

const rightButtonClickHandler = () => {
  if (activeIndex < thumbnails.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }

  renderProductImage();
  renderScrollPosition();
};

/* =============================== Toggle Menu =============================== */

const sideMenu = document.querySelector("#side-menu");
const body = document.querySelector("body");

const menuButtonClickHandler = () => {
  sideMenu.classList.replace("opacity-0", "opacity-100");
  sideMenu.classList.replace("left-[-100vw]", "left-0");
  body.classList.add("overflow-y-hidden");
};

const closeButtonClickHandler = () => {
  sideMenu.classList.replace("opacity-100", "opacity-0");
  sideMenu.classList.replace("left-0", "left-[-100vw]");
  body.classList.remove("overflow-y-hidden");
};

/* ============================= Quantity Button ============================= */

const quantity = document.querySelector("#quantity");

const valueChangeHandler = () => {
  if (quantity.value < 1) quantity.value = 1;
  else if (quantity.value > 100) quantity.value = 100;
};

const plusButtonClickHandler = () => {
  if (quantity.value < 100) quantity.value++;
};

const minusButtonClickHandler = () => {
  if (quantity.value > 1) quantity.value--;
};
