import React, { useState, forwardRef } from "react";
import { runSimulation, SimulationResults } from "../../../services/SimulationService";
import { useSimulationContext } from "../../../context/SimulationContext";

interface ChargePointSimulateFormProps {
  onClose: () => void;
}

const ChargePointSimulateForm = forwardRef<
  HTMLFormElement,
  ChargePointSimulateFormProps
>((props, formRef) => {
  const { onClose } = props;
  const [numChargePoints, setNumChargePoints] = useState(20);
  const [arrivalMultiplier, setArrivalMultiplier] = useState(100);
  const [carConsumption, setCarConsumption] = useState(18);
  const [chargingPower, setChargingPower] = useState(11);

  const { actions } = useSimulationContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const results: SimulationResults = runSimulation(
        numChargePoints,
        arrivalMultiplier,
        carConsumption,
        chargingPower
      );
      actions.updateData(results);
      onClose();
    } catch (error) {
      console.error("Error during simulation:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form ref={formRef} role="form" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="flex flex-col text-gray-600">
            Number of Charge Points
            <input
              type="number"
              className="border p-2 rounded"
              value={numChargePoints}
              onChange={(e) => setNumChargePoints(Number(e.target.value))}
              min="0"
            />
          </label>
          <label className="flex flex-col text-gray-600">
            Arrival Probability Multiplier (%)
            <input
              type="number"
              className="border p-2 rounded"
              value={arrivalMultiplier}
              onChange={(e) => setArrivalMultiplier(Number(e.target.value))}
              min="20"
              max="200"
            />
          </label>
          <label className="flex flex-col text-gray-600">
            Car Consumption (kWh/100km)
            <input
              type="number"
              className="border p-2 rounded"
              value={carConsumption}
              onChange={(e) => setCarConsumption(Number(e.target.value))}
              min="0"
            />
          </label>
          <label className="flex flex-col text-gray-600">
            Charging Power per Charge Point (kW)
            <input
              type="number"
              className="border p-2 rounded"
              value={chargingPower}
              onChange={(e) => setChargingPower(Number(e.target.value))}
              min="0"
            />
          </label>
        </div>
      </form>
    </div>
  );
});

export default ChargePointSimulateForm;
