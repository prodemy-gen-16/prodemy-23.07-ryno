import PropTypes from "prop-types";

function PageTitle({ id, className, children }) {
  return (
    <h1
      id={id}
      className={`mb-4 text-center text-3xl font-bold uppercase md:mb-8 ${className}`}
    >
      {children}
    </h1>
  );
}

PageTitle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default PageTitle;
