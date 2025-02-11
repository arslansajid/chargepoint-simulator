import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 // Importing jest-dom matchers
import Modal from './Modal';

describe("Modal Component", () => {
  
  test("renders modal when isOpen is true", () => {
    render(<Modal isOpen={true} title="Test Modal" onClose={() => {}} />);
    
    // Check if the modal is rendered
    expect(screen.getByText(/Test Modal/i)).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test("does not render modal when isOpen is false", () => {
    render(<Modal isOpen={false} title="Test Modal" onClose={() => {}} />);
    
    // Modal should not be in the document
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  test("renders children passed to the modal", () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={() => {}}>
        <p>Modal content here</p>
      </Modal>
    );
    
    // Check if children content is rendered
    expect(screen.getByText(/Modal content here/i)).toBeInTheDocument();
  });

  test("calls onClose when the 'Cancel' button is clicked", () => {
    const mockOnClose = jest.fn();
    render(<Modal isOpen={true} title="Test Modal" onClose={mockOnClose} />);
    
    // Find the cancel button and simulate a click
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);

    // Ensure the onClose handler is called
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when the 'Save' button is clicked", () => {
    const mockOnClose = jest.fn();
    render(<Modal isOpen={true} title="Test Modal" onClose={mockOnClose} />);
    
    // Find the save button and simulate a click
    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);

    // Ensure the onClose handler is called
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
