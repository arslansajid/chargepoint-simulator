import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal, { ModalProps } from "./Modal";

describe("Modal Component", () => {
  const defaultProps: ModalProps = {
    isOpen: true,
    title: "Test Modal",
    onClose: jest.fn(),
    onSubmit: jest.fn(),
    children: <p>Modal Content</p>,
  };

  it("should render the modal when isOpen is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should not render the modal when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should call onClose when cancel button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("Cancel"));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("should call onSubmit when save button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("Save"));
    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });
});
