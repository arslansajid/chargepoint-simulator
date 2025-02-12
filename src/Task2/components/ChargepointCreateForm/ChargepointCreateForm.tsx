import React, { useState, forwardRef } from "react";

type ChargePoint = {
  id: number;
  count: number;
  powerRating: number;
};

type ChargePointCreateFormProps = {
  onClose: () => void;
};

const ChargePointCreateForm = forwardRef<
  HTMLFormElement,
  ChargePointCreateFormProps
>((props, formRef) => {
  const [chargePoints, setChargePoints] = useState<ChargePoint[]>([
    { id: 1, count: 1, powerRating: 1 },
  ]);

  const handleInputChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setChargePoints((prevState: ChargePoint[]) =>
      prevState.map((cp: ChargePoint) =>
        cp.id === id ? { ...cp, [name]: value } : cp
      )
    );
  };

  const handleRemoveCharger = (id: number) => {
    setChargePoints((prevState: ChargePoint[]) =>
      prevState.filter((cp: ChargePoint) => cp.id !== id)
    );
  };

  const handleAddCharger = () => {
    setChargePoints((prevState: ChargePoint[]) => [
      ...prevState,
      { id: prevState.length + 1, count: 1, powerRating: 1 },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to save the charge points or send data to backend
    props.onClose();
  };

  return (
    <div className="max-w-6xl mx-auto">
      <form
        ref={formRef}
        role="form"
        onSubmit={handleSubmit}
        className="min-h-[100px]"
      >
        {chargePoints.map((cp, index) => {
          return (
            <div
              key={cp.id}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6 items-end"
            >
              <label className="flex flex-col text-gray-600">
                {`Power (in kWh)`}
                <input
                  type="number"
                  className="border p-2 rounded"
                  value={cp.powerRating}
                  name="powerRating"
                  onChange={(e) => handleInputChange(cp.id, e)}
                  min="1"
                />
              </label>
              <label className="flex flex-col text-gray-600">
                Quantity
                <input
                  type="number"
                  className="border p-2 rounded"
                  value={cp.count}
                  name="count"
                  onChange={(e) => handleInputChange(cp.id, e)}
                  min="1"
                />
              </label>
              {index >= 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveCharger(cp.id)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 h-[42px]"
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </form>
      <div className="flex justify-end">
          <button
            onClick={handleAddCharger}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 min-w-[130px]"
          >
            Add Charger
          </button>
        </div>
    </div>
  );
});

export default ChargePointCreateForm;
