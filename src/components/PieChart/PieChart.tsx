import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { COLORS } from "../../constants/Colors";

const colors = [COLORS.green, COLORS.orange];

type DataKey = {
  name: string;
  value: number;
};

export interface PieChartComponentProps {
  id: string;
  data: DataKey[];
  dataKey: string;
}

const PieChartComponent = ({ id, data, dataKey }: PieChartComponentProps) => {
  return (
    <div className="w-full h-[300px] md:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart id={id}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={1}
            dataKey={dataKey}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
