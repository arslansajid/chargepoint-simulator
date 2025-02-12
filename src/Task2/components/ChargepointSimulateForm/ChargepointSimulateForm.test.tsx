import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChargepointSimulateForm from "./ChargepointSimulateForm";

describe("ChargepointSimulateForm Component", () => {
  test("renders the form with initial state", () => {
    render(<ChargepointSimulateForm onClose={() => {}} />);

    // Check initial values in inputs
    expect(screen.getByLabelText(/Number of Charge Points/i)).toHaveValue(20);
    expect(screen.getByLabelText(/Arrival Probability Multiplier \(%\)/i)).toHaveValue(100);
    expect(screen.getByLabelText(/Car Consumption \(kWh\/100km\)/i)).toHaveValue(18);
    expect(screen.getByLabelText(/Charging Power per Charge Point \(kW\)/i)).toHaveValue(11);
  });

  test("updates input values correctly", () => {
    render(<ChargepointSimulateForm onClose={() => {}} />);

    const numChargePointsInput = screen.getByLabelText(/Number of Charge Points/i) as HTMLInputElement;
    const arrivalMultiplierInput = screen.getByLabelText(/Arrival Probability Multiplier \(%\)/i) as HTMLInputElement;
    const carConsumptionInput = screen.getByLabelText(/Car Consumption \(kWh\/100km\)/i) as HTMLInputElement;
    const chargerPowerInput = screen.getByLabelText(/Charging Power per Charge Point \(kW\)/i) as HTMLInputElement;

    // Simulate user changing input fields
    fireEvent.change(numChargePointsInput, { target: { value: "50" } });
    fireEvent.change(arrivalMultiplierInput, { target: { value: "150" } });
    fireEvent.change(carConsumptionInput, { target: { value: "20" } });
    fireEvent.change(chargerPowerInput, { target: { value: "15" } });

    // Ensure the values have been updated correctly
    expect(numChargePointsInput.value).toBe("50");
    expect(arrivalMultiplierInput.value).toBe("150");
    expect(carConsumptionInput.value).toBe("20");
    expect(chargerPowerInput.value).toBe("15");
  });

});
