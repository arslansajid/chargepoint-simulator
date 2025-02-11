import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = [ '#00C49F',  '#FF8042'];

type DataKey = {
  name: string;
  value: number;
};

export interface PieChartComponentProps {
  id: string;
  data: DataKey[];
  dataKey: string;
}

const PieChartComponent = ({
  id,
  data,
  dataKey,
}: PieChartComponentProps) => {

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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
