import React, { useState, useRef, useCallback } from "react";
import {
  chargingDataPerDay,
  chargingDataPerMonth,
  chargingDataPerWeek,
  chargingDataPerYear,
  chargingSessionsData,
  energyConsumedData,
} from "./static";
import Card from "../components/Card/Card";
import ChargePointCreateForm from "./components/ChargepointCreateForm/ChargepointCreateForm";
import ChargePointSimulateForm from "./components/ChargepointSimulateForm/ChargepointSimulateForm";
import LineChartComponent from "../components/LineChart/LineChart";
import PieChartComponent from "../components/PieChart/PieChart";
import BarChartComponent from "../components/BarChart/BarChart";
import Modal from "../components/Modal";
import SimulationResults from "./components/SimulationResults";

const ChargingSimulator = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const simulationFormRef = useRef<HTMLFormElement>(null);
  const createChargersFormRef = useRef<HTMLFormElement>(null);

  const submitSimulationForm = useCallback(() => {
    simulationFormRef.current?.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  }, [simulationFormRef]);

  const submitCreateChargersForm = useCallback(() => {
    createChargersFormRef.current?.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  }, [createChargersFormRef]);

  return (
    <>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Simulate Charge points
          </button>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Create Charge points
          </button>
        </div>

        <section id="charging-events" className="my-8">
          <SimulationResults />
        </section>

        <section id="charging-events" className="my-8">
          <p className="text-xl font-semibold text-gray-800">Charging Events</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
            <Card title={"Charging Events per Year:"} description={"36500"} />
            <Card title={"Charging Events per Month:"} description={"300"} />
            <Card title={"Charging Events per Week:"} description={"700"} />
            <Card title={"Charging Events per Day:"} description={"24"} />
          </div>
        </section>

        <section id="graphs" className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col max-w-sm rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-xl font-semibold text-gray-800">Chargers</p>
              <PieChartComponent
                id="chargers"
                data={[
                  { name: "Available", value: 200 },
                  { name: "Unavailable", value: 300 },
                ]}
                dataKey="value"
              />
            </div>
            <div className="flex flex-col max-w-sm rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                Energy charged (kWh)
              </p>
              <BarChartComponent
                id="energy"
                data={energyConsumedData}
                dataKey="name"
              />
            </div>
            <div className="flex flex-col max-w-sm rounded-lg border border-gray-200 bg-white p-3">
              <p className="text-xl font-semibold text-gray-800">
                Charging Sessions (24 hrs)
              </p>
              <BarChartComponent
                id="sessions"
                data={chargingSessionsData}
                dataKey="name"
              />
            </div>
          </div>
        </section>

        <h2 className="text-xl font-semibold mb-4">
          Charging Power Over a Day
        </h2>
        <LineChartComponent
          id="day"
          data={chargingDataPerDay}
          dataKey="power"
          xAxisDataKey="time"
        />

        <h2 className="text-xl font-semibold mb-4">
          Charging Power Over a Week
        </h2>
        <LineChartComponent
          id="week"
          data={chargingDataPerWeek}
          dataKey="power"
          xAxisDataKey="date"
        />

        <h2 className="text-xl font-semibold mb-4">
          Charging Power Over a Month
        </h2>
        <LineChartComponent
          id="month"
          data={chargingDataPerMonth}
          dataKey="power"
          xAxisDataKey="date"
        />

        <h2 className="text-xl font-semibold mb-4">
          Charging Power Over a Year
        </h2>
        <LineChartComponent
          id="year"
          data={chargingDataPerYear}
          dataKey="power"
          xAxisDataKey="date"
        />
      </div>
      <Modal
        title="Simulate Charge points"
        isOpen={isModalOpen}
        onSubmit={submitSimulationForm}
        onClose={() => setModalOpen(false)}
        submitButtonText="Simulate"
      >
        <ChargePointSimulateForm
          ref={simulationFormRef}
          onClose={() => setModalOpen(false)}
        />
      </Modal>
      <Modal
        title="Create Charge points"
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={submitCreateChargersForm}
        submitButtonText="Create"
      >
        <ChargePointCreateForm
          ref={createChargersFormRef}
          onClose={() => setCreateModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default ChargingSimulator;
