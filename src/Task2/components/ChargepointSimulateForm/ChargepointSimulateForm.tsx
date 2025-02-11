import React, { useState } from "react";

type ChargePoint = {
  id: number;
  count: number;
  powerRating: number;
};

const ChargepointSimulateForm: React.FC = () => {
    const [numChargePoints, setNumChargePoints] = useState(20);
    const [arrivalMultiplier, setArrivalMultiplier] = useState(100);
    const [carConsumption, setCarConsumption] = useState(18);
    const [chargerPower, setChargerPower] = useState(11);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to save the charge points or send data to backend
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form role='form' onSubmit={handleSubmit}>
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
              value={chargerPower}
              onChange={(e) => setChargerPower(Number(e.target.value))}
              min="0"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ChargepointSimulateForm;
