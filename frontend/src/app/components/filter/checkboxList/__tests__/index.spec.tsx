import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

let mockParams = new URLSearchParams();
const mockPathname = "/test";
const redirect = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useSearchParams: () => mockParams,
  redirect,
}));

import CheckboxList from "..";

const defaultProps = {
  name: "Test Form",
  filter: [{ value: "item1" }, { value: "item2" }],
  type: "test",
};

const setup = (props = defaultProps) => ({
  ...render(<CheckboxList {...props} />),
  user: userEvent.setup(),
});

describe("CheckboxList", () => {
  test("renders form with name, filter items and checkboxes", () => {
    const { getByText, getAllByRole } = setup();

    expect(getByText("Test Form")).toBeInTheDocument();
    expect(getAllByRole("checkbox")).toHaveLength(2);
    expect(getByText("item1")).toBeInTheDocument();
    expect(getByText("item2")).toBeInTheDocument();
  });

  test("updates checkbox state based on URL parameter", () => {
    mockParams = new URLSearchParams("test=item1");

    const { getByRole } = setup();

    expect(getByRole("checkbox", { name: "item1" })).toBeChecked();
    expect(getByRole("checkbox", { name: "item2" })).not.toBeChecked();
  });

  test("updates URL parameter when checkbox is checked", async () => {
    mockParams = new URLSearchParams();

    const { getByRole } = setup();

    const checkbox = getByRole("checkbox", { name: "item1" });
    await userEvent.click(checkbox);

    expect(redirect).toHaveBeenCalledWith(`${mockPathname}?test=item1`);
  });

  test("updates URL parameter when checkbox is unchecked", async () => {
    mockParams = new URLSearchParams("test=item1");

    const { getByRole } = setup();

    const checkbox = getByRole("checkbox", { name: "item1" });
    await userEvent.click(checkbox);

    expect(redirect).toHaveBeenCalledWith(`${mockPathname}?`);
  });
});
