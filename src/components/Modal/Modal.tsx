import React, { useState, ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div role='dialog' className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg md:w-1/3 lg:w-1/3 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
        <div className='flex justify-end gap-2 mt-6'>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default Modal;
