import React from 'react';
import ChargingSimulator from './Task2/Task2';
import Header from './components/Header/Header';
import SimulationContext from './context/SimulationContext';

const App = () => {
  return (
    <SimulationContext>
      <Header />
      <ChargingSimulator />
    </SimulationContext>
  );
}

export default App;
