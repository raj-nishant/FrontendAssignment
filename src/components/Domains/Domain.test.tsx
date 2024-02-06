import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Domains from "./Domains";

describe("Domains component", () => {
  test("renders without crashing", () => {
    render(<Domains />);
  });

  test("renders service cards with correct content", () => {
    const { getByAltText, getByText } = render(<Domains />);

    // Assert the first service card
    expect(getByAltText("Front-end")).toBeInTheDocument();
    expect(getByText("Front-end")).toBeInTheDocument();
    expect(
      getByText(
        "Our frontend developers understand the delicate balance between aesthetics and functionality."
      )
    ).toBeInTheDocument();

    // Assert the second service card
    expect(getByAltText("Back-end")).toBeInTheDocument();
    expect(getByText("Back-end")).toBeInTheDocument();
    expect(
      getByText(
        "Our backend developers are the architects of efficiency and security. They design and build the databases and APIs."
      )
    ).toBeInTheDocument();

    // Assert the third service card
    expect(getByAltText("Data Analysts")).toBeInTheDocument();
    expect(getByText("Data Analysts")).toBeInTheDocument();
    expect(
      getByText(
        "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts."
      )
    ).toBeInTheDocument();
  });
});
