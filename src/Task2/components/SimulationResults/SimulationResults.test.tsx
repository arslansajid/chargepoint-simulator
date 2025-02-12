import React from "react";
import { render, screen } from "@testing-library/react";
import { useSimulationContext } from "../../../context/SimulationContext";
import SimulationResults from "./SimulationResults";

// Mock useSimulationContext
jest.mock("../../../context/SimulationContext", () => ({
  useSimulationContext: jest.fn(),
}));

describe("SimulationResults Component", () => {
  beforeEach(() => {
    (useSimulationContext as jest.Mock).mockReturnValue({
      data: {
        totalEnergyConsumed: 82244,
        theoreticalMaxDemand: 220,
        actualMaxDemand: 180,
        concurrencyFactor: 40.5,
      },
    });
  });

  it("renders all result cards with correct values", () => {
    render(<SimulationResults />);

    expect(screen.getByText("Simulation Results")).toBeInTheDocument();
    expect(screen.getByText("Total Energy Consumed:"));
    expect(screen.getByText("82244 kWh"));
    expect(screen.getByText("Theoretical Max Power Demand:"));
    expect(screen.getByText("220 kW"));
    expect(screen.getByText("Actual Max Power Demand:"));
    expect(screen.getByText("180 kW"));
    expect(screen.getByText("Concurrency Factor:"));
    expect(screen.getByText("40.50%"));
  });
});
