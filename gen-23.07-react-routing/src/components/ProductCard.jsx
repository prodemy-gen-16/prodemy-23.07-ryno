import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatCurrency, formatDate } from "../services/format.js";

function ProductCard({ product }) {
  const { id, name, price, image, release } = product;

  const getThumbnailUrl = (urls) => urls[0].replace("S4.webp", "S3.webp");

  return (
    <div className="flex flex-col items-center">
      <Link
        to={`/product/${id}`}
        className="mb-3 w-full rounded-md bg-dark-100"
      >
        <img
          className="h-[260px] w-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-[103%] xl:h-[320px]"
          src={getThumbnailUrl(image)}
          alt={name}
        />
      </Link>
      <Link to={`/product/${id}`}>
        <h5 className="text-lg font-semibold uppercase transition-colors duration-300 hover:text-dark-300">
          {name}
        </h5>
      </Link>
      <p>{formatCurrency(price)}</p>
      <p className="mt-0.5 text-sm font-light text-dark-200">
        {formatDate(release)}
      </p>
    </div>
  );
}

ProductCard.propTypes = { product: PropTypes.object.isRequired };

export default ProductCard;
