// import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Landing from "./Landing";

describe("Landing component", () => {
  test("renders without crashing", () => {
    render(<Landing />);
  });

  test("renders image with correct attributes", () => {
    const { getByAltText } = render(<Landing />);
    const image = getByAltText("Your Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/landing.png");
    expect(image).toHaveClass("fade-image");
    expect(image).toHaveClass("border");
    expect(image).toHaveClass("rounded-3xl");
  });

  test("renders title with correct content and styles", () => {
    const { getByText } = render(<Landing />);
    expect(
      getByText("TechSynergy: Innovate, Create, Elevate")
    ).toBeInTheDocument();
    expect(getByText("TechSynergy: Innovate, Create, Elevate")).toHaveClass(
      "text-5xl"
    );
    expect(getByText("TechSynergy: Innovate, Create, Elevate")).toHaveClass(
      "md:text-[64px]"
    );
    expect(getByText("TechSynergy: Innovate, Create, Elevate")).toHaveClass(
      "font-medium"
    );
    expect(getByText("TechSynergy: Innovate, Create, Elevate")).toHaveClass(
      "text-white"
    );
    expect(
      getByText("Unlocking Possibilities, One Code at a Time")
    ).toBeInTheDocument();
    expect(
      getByText("Unlocking Possibilities, One Code at a Time")
    ).toHaveClass("text-white");
    expect(
      getByText("Unlocking Possibilities, One Code at a Time")
    ).toHaveClass("md:text-gray-500");
    expect(
      getByText("Unlocking Possibilities, One Code at a Time")
    ).toHaveClass("font-medium");
  });

  test("renders 'See Projects' button with correct styles", () => {
    const { getByText } = render(<Landing />);
    const button = getByText("See Projects");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[#66B066]");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("px-5");
    expect(button).toHaveClass("py-2");
    expect(button).toHaveClass("rounded-full");
    expect(button).toHaveClass("font-medium");
  });
});
