import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import TopPanel from ".";

describe("Top Panel", () => {
  test("Number of Followers is displayed correctly", () => {
    render(<TopPanel totalFollowers={1237123} />);
    expect(
      screen.getByText("Total Followers: 1,237,123", { exact: true })
    ).toBeInTheDocument();
  });
});
