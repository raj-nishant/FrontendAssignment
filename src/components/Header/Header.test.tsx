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

  //   test("toggles menu when clicked", () => {
  //     const { getByAltText, getByText } = render(<Header />);
  //     const toggleButton = getByAltText("Menu");
  //     fireEvent.click(toggleButton);
  //     expect(getByText("Home")).toBeInTheDocument();
  //     fireEvent.click(toggleButton);
  //     expect(getByText("Home")).not.toBeInTheDocument();
  //   });

  test("renders desktop logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("Logo")).toBeInTheDocument();
  });

  test("renders mobile logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("Mobile Logo")).toBeInTheDocument();
  });

  //   test("renders menu items", () => {
  //     const { getByText } = render(<Header />);
  //     expect(getByText("Home")).toBeInTheDocument();
  //     expect(getByText("About us")).toBeInTheDocument();
  //     expect(getByText("Services")).toBeInTheDocument();
  //     expect(getByText("Contact Us")).toBeInTheDocument();
  //   });

  //   test("renders 'Schedule a call' button", () => {
  //     const { getByText } = render(<Header />);
  //     expect(getByText("Schedule a call")).toBeInTheDocument();
  //   });
});
