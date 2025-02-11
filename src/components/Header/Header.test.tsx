import React from "react";
import { render, screen } from "@testing-library/react";
 // Importing jest-dom matchers
import Header from "./Header";

describe("Header Component", () => {

  test("renders the Header component", () => {
    render(<Header />);

    // Check if the header is in the document
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders the title 'EV Charge Simulation'", () => {
    render(<Header />);

    // Check if the title is rendered
    expect(screen.getByText(/EV Charge Simulation/i)).toBeInTheDocument();
  });

  test("renders the anchor tag with the correct href", () => {
    render(<Header />);

    // Check if the anchor tag has the correct href
    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toHaveAttribute('href', '#');
    expect(anchorElement).toHaveTextContent("EV Charge Simulation");
  });
});
