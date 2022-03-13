import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("Renders", () => {
  render(<App />);
  expect(screen.getByText("Social Media Dashboard")).toBeInTheDocument();
});

// test("Renders two panels in the dashboard ", () => {});

// test("Draggable order is saved to localStorage and re-rendered");

// test("Top panel has a card for each medium", () => {});

// test("Overview panel has two cards for each medium", () => {});

// test("Dark mode choice is persisted to localStorage", () => {});

// test("Dark mode is shown according to localStorage", () => {});
