import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toggle from ".";

test("onChange gets fired", () => {
  const toggleFn = jest.fn();
  render(<Toggle onchange={toggleFn} />);
  const toggle = screen.getByRole("checkbox");
  expect(toggle).toBeInTheDocument();

  fireEvent.click(toggle);
  expect(toggle).toBeChecked();
  expect(toggleFn).toHaveBeenCalled();

  fireEvent.click(toggle);
  expect(toggle).not.toBeChecked();
  expect(toggleFn).toHaveBeenCalledTimes(2);
});
