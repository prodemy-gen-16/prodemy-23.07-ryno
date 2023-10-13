import PropTypes from "prop-types";

function ProductFilter({ filter, onInputsChange, onInputsSubmit }) {
  return (
    <form
      onSubmit={onInputsSubmit}
      autoComplete="off"
      className="mb-6 flex justify-between gap-3"
    >
      <input
        name="name"
        value={filter.query}
        type="search"
        className="w-full rounded border border-dark-300 px-4 py-2 focus:border-primary-100 focus:ring-primary-100"
        placeholder="Search Product"
        onChange={onInputsChange}
      />
      <select
        name="order"
        value={filter.order}
        title="Sort By"
        className="rounded border border-dark-300 px-2 py-2 pr-8 focus:border-primary-100 focus:ring-primary-100"
        onChange={onInputsChange}
      >
        <option value="featured">Featured</option>
        <option value="latest">Latest Product</option>
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
      </select>
    </form>
  );
}

ProductFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  onInputsChange: PropTypes.func.isRequired,
  onInputsSubmit: PropTypes.func.isRequired,
};

export default ProductFilter;
