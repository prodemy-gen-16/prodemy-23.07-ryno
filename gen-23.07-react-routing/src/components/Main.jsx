import * as PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="min-h-screen px-5 py-24 md:px-16 lg:mx-auto lg:max-w-[1340px]">
      {children}
    </main>
  );
}

Main.propTypes = { children: PropTypes.element };

export default Main;
