import PropTypes from "prop-types";

function ProductFilter({ filter, onFilterChange }) {
  return (
    <section className="mb-6 flex justify-between gap-3">
      <input
        type="text"
        className="w-full rounded border border-dark-300 px-4 py-2 focus:border-dark-500 focus:ring-dark-500"
        placeholder="Search Product"
        name="nameFilter"
        value={filter.nameFilter}
        onChange={onFilterChange}
      />
      <select
        name="sortBy"
        id="sort"
        title="Sort By"
        className="rounded border border-dark-300 px-2 py-2 pr-8 focus:border-dark-500 focus:ring-dark-500"
        value={filter.sortBy}
        onChange={onFilterChange}
      >
        <option value="featured">Featured</option>
        <option value="latest">Latest Product</option>
        <option value="lowest">Lowest Price</option>
        <option value="highest">Highest Price</option>
      </select>
    </section>
  );
}

ProductFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ProductFilter;
