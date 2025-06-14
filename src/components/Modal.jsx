import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start pt-[80px] sm:pt-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
