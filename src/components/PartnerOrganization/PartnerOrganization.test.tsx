import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PartnerOrganization from "./PartnerOrganization";

describe("PartnerOrganization component", () => {
  test("renders without crashing", () => {
    render(<PartnerOrganization />);
  });

  test("renders button with correct text", () => {
    const { getByText } = render(<PartnerOrganization />);
    const button = getByText("Out Full Repertoire");
    expect(button).toBeInTheDocument();
  });
});
