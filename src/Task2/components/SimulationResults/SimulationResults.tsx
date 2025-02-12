import React from "react";
import Card from "../../../components/Card";
import { useSimulationContext } from "../../../context/SimulationContext";


const SimulationResults: React.FC = () => {
  const {
    data: {
      totalEnergyConsumed,
      theoreticalMaxDemand,
      actualMaxDemand,
      concurrencyFactor,
    },
  } = useSimulationContext();
  
  return (
    <>
      <p className="text-xl font-semibold text-gray-800">Simulation Results</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        <Card title={`Total Energy Consumed:`} description={`${totalEnergyConsumed} kWh`} />
        <Card title={`Theoretical Max Power Demand:`} description={`${theoreticalMaxDemand} kW`} />
        <Card title={`Actual Max Power Demand:`} description={`${actualMaxDemand} kW`} />
        <Card title={`Concurrency Factor:`} description={`${concurrencyFactor.toFixed(2)}%`} />
      </div>
    </>
  );
};

export default SimulationResults;
