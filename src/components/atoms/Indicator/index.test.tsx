import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import Indicator from ".";

describe("Indicator", () => {
  test("Has optional items if requested", () => {
    render(<Indicator value={50} percent arrow period={3} />);
    expect(screen.getByAltText("Green up arrow")).toBeInTheDocument();
    expect(
      screen.getByText("Last 3 days", { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText("50%", { exact: false })).toBeInTheDocument();
  });
});
