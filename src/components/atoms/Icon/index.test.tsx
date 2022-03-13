/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Icon from ".";

describe("Icon", () => {
  test("Icon not found returns placeholder", () => {
    const { container } = render(<Icon iconName="" />);
    expect(container.firstChild).toHaveClass("empty");
  });

  test("Icon found has corresponding alt text", () => {
    render(<Icon iconName="Facebook" />);
    expect(screen.getByAltText("Facebook")).toBeValid();
  });
});
