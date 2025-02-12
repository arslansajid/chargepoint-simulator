import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ChargePointForm from "./ChargepointCreateForm";

describe("ChargePointForm Component", () => {
  test("renders the form with initial charge point", () => {
    render(<ChargePointForm onClose={() => {}} />);

    // Check for initial input fields
    expect(screen.getByLabelText(/Power \(in kWh\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Quantity/i)).toBeInTheDocument();

    // Ensure the "Add Charger" button is present
    expect(screen.getByText(/Add Charger/i)).toBeInTheDocument();
  });

  test("updates input values correctly", () => {
    render(<ChargePointForm onClose={() => {}} />);

    const powerInput = screen.getByLabelText(/Power \(in kWh\)/i) as HTMLInputElement;
    const quantityInput = screen.getByLabelText(/Quantity/i) as HTMLInputElement;

    fireEvent.change(powerInput, { target: { value: "22" } });
    fireEvent.change(quantityInput, { target: { value: "3" } });

    expect(powerInput.value).toBe("22");
    expect(quantityInput.value).toBe("3");
  });

  test("adds a new charge point when clicking 'Add Charger'", () => {
    render(<ChargePointForm onClose={() => {}} />);

    const addButton = screen.getByText(/Add Charger/i);
    fireEvent.click(addButton);

    // Expect two sets of inputs now
    const powerInputs = screen.getAllByLabelText(/Power \(in kWh\)/i);
    const quantityInputs = screen.getAllByLabelText(/Quantity/i);

    expect(powerInputs.length).toBe(2);
    expect(quantityInputs.length).toBe(2);
  });

  test("removes a charge point when clicking 'Remove'", () => {
    render(<ChargePointForm onClose={() => {}} />);

    const addButton = screen.getByText(/Add Charger/i);
    fireEvent.click(addButton); // Add one more charge point

    const removeButtons = screen.getAllByText(/Remove/i);
    fireEvent.click(removeButtons[0]); // Remove the second charge point

    expect(screen.queryAllByText(/Remove/i).length).toBe(0); // Should be no remove button left
  });
});
