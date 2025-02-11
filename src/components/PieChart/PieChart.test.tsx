import React from "react";
import { render } from "@testing-library/react";
import PieChartComponent from "./PieChart";

// Mocking recharts components
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  PieChart: ({ children }: any) => <div>{children}</div>,
  Pie: ({ children }: any) => <div>{children}</div>,
  Cell: ({ children }: any) => <div>{children}</div>,
  Tooltip: () => <div>Tooltip</div>,
  Legend: () => <div>Legend</div>
}));

describe("PieChartComponent Snapshot Test", () => {

  const mockData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  test("matches snapshot", () => {
    const { asFragment } = render(
      <PieChartComponent id="testId" data={mockData} dataKey="value" />
    );

    // Create the snapshot of the rendered component
    expect(asFragment()).toMatchSnapshot();
  });
});
