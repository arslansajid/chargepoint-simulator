import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React from "react";

type DataKey = {
  time: string;
  power: number;
};

export interface LineChartComponentProps {
  id: string;
  data: DataKey[];
  xAxisDataKey: string;
  dataKey: string;
}

const LineChartComponent = ({
  id,
  data,
  dataKey,
  xAxisDataKey,
}: LineChartComponentProps) => {
  const renderTick = (props: any) => {
    const { x, y, payload } = props;

    // Apply transformation to the label
    switch (id) {
      case "year":
        const monthName = new Date(payload.value).toLocaleString("en-US", {
          month: "short",
        });
        return (
          <text x={x} y={y + 10} textAnchor="middle" fill="#666" fontSize={12}>
            {monthName}
          </text>
        );
      default:
        return (
          <text x={x} y={y + 10} textAnchor="middle" fill="#666" fontSize={12}>
            {payload.value}
          </text>
        );
    }
  };

  return (
    <div className="w-full h-[300px] md:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisDataKey} tick={renderTick} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
