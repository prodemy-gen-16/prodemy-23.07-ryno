import PropTypes from "prop-types";

function ConfirmationModal({ onClose, onConfirm, children, confirmOption }) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-dark-500 bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg bg-white px-32 py-24 shadow-md"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-xl">{children}</h2>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            className="rounded border-2 border-dark-300 bg-white px-4 py-2 transition-colors hover:bg-dark-100"
            onClick={onClose}
            type="button"
          >
            CANCEL
          </button>
          <button
            className="rounded border-2 border-dark-500 bg-dark-500 px-4 py-2 text-dark-100 transition-colors hover:bg-dark-400"
            onClick={onConfirm}
            type="button"
          >
            {confirmOption || "CONFIRM"}
          </button>
        </div>

        <button
          className="absolute right-4 top-4"
          onClick={onClose}
          type="button"
          title="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

ConfirmationModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  confirmOption: PropTypes.string,
};

export default ConfirmationModal;
