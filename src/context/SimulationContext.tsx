import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const initialValues = {
  totalEnergyConsumed: 82244,
  theoreticalMaxDemand: 220,
  actualMaxDemand: 110,
  concurrencyFactor: 35,
};

type ContextValuesType = {
  totalEnergyConsumed: number;
  theoreticalMaxDemand: number;
  actualMaxDemand: number;
  concurrencyFactor: number;
};

type ContextActions = {
  updateData: (values: any) => void;
};

type SimulationContextValues = {
  data: ContextValuesType;
  actions: ContextActions;
};

const SimulationContext = createContext<SimulationContextValues>({
  data: initialValues,
  actions: {
    updateData: () => undefined,
  },
});

export const useSimulationContext = () => {
  const menuContext = useContext(SimulationContext);
  return menuContext;
};

interface WrapperProps {
  children: ReactNode;
}

const ContextWrapper = memo((props: WrapperProps) => {
  const [data, setData] = useState({ ...initialValues });

  const updateData = useCallback((values: ContextValuesType) => {
    setData((prevState) => ({
      ...prevState,
      ...values,
    }));
  }, []);

  const value = useMemo(
    () => ({
      data,
      actions: { updateData },
    }),
    [data, updateData]
  );

  return (
    <SimulationContext.Provider value={value}>
      {props.children}
    </SimulationContext.Provider>
  );
});

export default ContextWrapper;
