import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          EV Charge Simulation
        </a>
      </div>
    </header>
  );
};

export default Header;
