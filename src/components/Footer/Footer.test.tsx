import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders without crashing", () => {
    render(<Footer />);
  });

  test("renders product section with correct links", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Product")).toBeInTheDocument();
    expect(getByText("Employee database")).toBeInTheDocument();
    expect(getByText("Payroll")).toBeInTheDocument();
    expect(getByText("Absences")).toBeInTheDocument();
    expect(getByText("Time Tracking")).toBeInTheDocument();
    expect(getByText("Shift Planner")).toBeInTheDocument();
    expect(getByText("Recruiting")).toBeInTheDocument();
  });

  test("renders information section with correct links", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Information")).toBeInTheDocument();
    expect(getByText("FAQ")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Support")).toBeInTheDocument();
  });

  test("renders company section with correct links", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Company")).toBeInTheDocument();
    expect(getByText("About Us")).toBeInTheDocument();
    expect(getByText("Career")).toBeInTheDocument();
    expect(getByText("Contact us")).toBeInTheDocument();
    expect(getByText("Lift Media")).toBeInTheDocument();
  });

  test("renders the 'Hello, we are Lift Media...' paragraph", () => {
    const { getByText } = render(<Footer />);

    expect(
      getByText(
        "Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team."
      )
    ).toBeInTheDocument();
  });

  test("renders logos and social media icons", () => {
    const { getAllByAltText } = render(<Footer />);

    const logo = getAllByAltText("logo");
    expect(logo.length).toBe(1);
    expect(logo[0]).toBeInTheDocument();

    const socialMediaIcons = getAllByAltText("");
    expect(socialMediaIcons.length).toBe(3); // Assuming there are 3 social media icons
    socialMediaIcons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });
  });

  test("renders terms, privacy, and cookies links", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Terms")).toBeInTheDocument();
    expect(getByText("Privacy")).toBeInTheDocument();
    expect(getByText("Cookies")).toBeInTheDocument();
  });
});
