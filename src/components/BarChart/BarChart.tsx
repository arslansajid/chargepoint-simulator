import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { COLORS } from "../../constants/Colors";

type DataKey = {
  name: string;
  value: number;
};

export interface BarChartComponentProps {
  id: string;
  data: DataKey[];
  dataKey: string;
}

const BarChartComponent = ({ id, data, dataKey }: BarChartComponentProps) => {
  return (
    <div className="w-full h-[300px] md:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          id={id}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            fill={id === "sessions" ? COLORS.orange : COLORS.green}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
