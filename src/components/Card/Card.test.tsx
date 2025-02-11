import React from "react";
import { render, screen } from "@testing-library/react";
 // Importing jest-dom matchers
import Card from "./Card";

describe("Card Component", () => {

  test("renders the title and description correctly", () => {
    render(<Card title="Card Title" description="Card Description" />);

    // Check if the title is rendered correctly
    expect(screen.getByText("Card Title")).toBeInTheDocument();

    // Check if the description is rendered correctly
    expect(screen.getByText("Card Description")).toBeInTheDocument();
  });

  test("applies correct classes to the title and description", () => {
    render(<Card title="Card Title" description="Card Description" />);

    // Check if the title has the correct class names
    const titleElement = screen.getByText("Card Title");
    expect(titleElement).toHaveClass("text-gray-600", "text-base", "mb-4");

    // Check if the description has the correct class names
    const descriptionElement = screen.getByText("Card Description");
    expect(descriptionElement).toHaveClass("text-2xl", "font-semibold", "text-gray-800", "mb-2");
  });
});
