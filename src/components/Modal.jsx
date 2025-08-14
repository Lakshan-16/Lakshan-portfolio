import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative pointer-events-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

/* Removed:

bg-black bg-opacity-50


so there’s no dark overlay.

Added:

pointer-events-none


on the outer container so clicks pass through background,
and

pointer-events-auto


on the modal box so it can still be clicked.*/