import React from "react";
import { render } from "@testing-library/react";
import BarChartComponent from "./BarChart";

// Mocking recharts components
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  BarChart: ({ children }: any) => <div>{children}</div>,
  Bar: ({ children }: any) => <div>{children}</div>,
  CartesianGrid: () => <div>CartesianGrid</div>,
  XAxis: () => <div>X-Axis</div>,
  YAxis: () => <div>Y-Axis</div>,
  Tooltip: () => <div>Tooltip</div>,
  Legend: () => <div>Legend</div>
}));

describe("BarChartComponent Snapshot Test", () => {

  const mockData = [
    { name: "Item 1", value: 30 },
    { name: "Item 2", value: 40 },
  ];

  test("matches snapshot", () => {
    const { asFragment } = render(
      <BarChartComponent id="testId" data={mockData} dataKey="name" />
    );

    // Create the snapshot of the rendered component
    expect(asFragment()).toMatchSnapshot();
  });
});
