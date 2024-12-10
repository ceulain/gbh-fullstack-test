import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Vehicle from "..";

const useRouterMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => useRouterMock(),
}));

describe("Vehicle component", () => {
  test("should render vehicle card with all required props", () => {
    const props = {
      id: "123",
      name: "Test Car",
      description: "Test Description",
      price: 10000,
      index: 0,
    };

    const { getByText, getByAltText } = render(<Vehicle {...props} />);

    expect(getByText("Test Car")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
    expect(getByText("10000 €")).toBeInTheDocument();
    expect(getByAltText("Test Car image")).toBeInTheDocument();
  });
});
