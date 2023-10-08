import PropTypes from "prop-types";

function ProductCard({ product }) {
  const { name, price, image } = product;
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const getThumbnailUrl = (urls) => urls[0].replace("S5.webp", "S3.webp");

  return (
    <div className="flex flex-col items-center">
      <a href="#" className="mb-3 rounded-md bg-dark-100">
        <img
          className="h-[260px] w-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-[103%] xl:h-[320px]"
          src={getThumbnailUrl(image)}
          alt={name}
        />
      </a>
      <a href="#">
        <h5 className="text-lg font-semibold transition-colors duration-300 hover:text-dark-300">
          {name}
        </h5>
      </a>
      <p>{rupiahFormat.format(price)}</p>
    </div>
  );
}

ProductCard.propTypes = { product: PropTypes.object.isRequired };
export default ProductCard;
