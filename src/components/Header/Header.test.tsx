import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });

  test("initial toggle state is false", () => {
    const { getByAltText } = render(<Header />);
    const toggleButton = getByAltText("Menu");
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("src", "/hamburgerMenu.svg");
  });

  test("renders desktop logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("Logo")).toBeInTheDocument();
  });

  test("renders mobile logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("Mobile Logo")).toBeInTheDocument();
  });
});
