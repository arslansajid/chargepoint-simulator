import React from "react";

export interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-3">
        <p className="text-gray-600 text-base mb-4">{title}</p>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
