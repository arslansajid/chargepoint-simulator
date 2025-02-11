import React from "react";
import { render } from "@testing-library/react";
import LineChartComponent from "./LineChart";

// Mocking recharts components
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  LineChart: ({ children }: any) => <div>{children}</div>,
  Line: ({ children }: any) => <div>{children}</div>,
  XAxis: ({ children }: any) => <div>{children}</div>,
  YAxis: ({ children }: any) => <div>{children}</div>,
  CartesianGrid: ({ children }: any) => <div>{children}</div>,
  Tooltip: () => <div>Tooltip</div>,
  Legend: () => <div>Legend</div>,
}));

describe("LineChartComponent Snapshot Test", () => {
  const mockData = [
    { time: "2023-01-01", power: 200 },
    { time: "2023-01-02", power: 220 },
    { time: "2023-01-03", power: 240 },
  ];

  test("matches snapshot", () => {
    const { asFragment } = render(
      <LineChartComponent
        id="year"
        data={mockData}
        xAxisDataKey="time"
        dataKey="power"
      />
    );

    // Create the snapshot of the rendered component
    expect(asFragment()).toMatchSnapshot();
  });
});
