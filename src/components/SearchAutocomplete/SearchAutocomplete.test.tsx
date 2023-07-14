import { render, fireEvent, screen } from "@testing-library/react";
import SearchAutocomplete from "./SearchAutocomplete";

const options = [
  { key: "1", value: "Option 1" },
  { key: "2", value: "Option 2" },
];
const searchLabel = "Search for a city";

test("renders the search label", () => {
  render(
    <SearchAutocomplete
      searchLabel={searchLabel}
      options={options}
      optionSelector="value"
      loading={false}
    />
  );
  const searchInput = screen.getByLabelText(searchLabel);
  expect(searchInput).toBeInTheDocument();
});

test("renders an error message when an error is provided", () => {
  const error = new Error("Something went wrong");
  render(
    <SearchAutocomplete
      searchLabel={searchLabel}
      options={options}
      optionSelector="value"
      loading={false}
      error={error}
    />
  );
  const errorText = screen.getByText("Something went wrong");
  expect(errorText).toBeInTheDocument();
});

test("renders options in the autocomplete", async () => {
  render(
    <SearchAutocomplete
      searchLabel={searchLabel}
      options={options}
      optionSelector="value"
      loading={false}
    />
  );

  const searchInput = screen.getByLabelText(searchLabel);
  fireEvent.change(searchInput, { target: { value: "Option" } });
  // Wait for options to appear in the document
  const option1 = await screen.findByText("Option 1");
  const option2 = await screen.findByText("Option 2");

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
});

test("triggers the onInputChange event", () => {
  const onInputChange = jest.fn();
  render(
    <SearchAutocomplete
      searchLabel={searchLabel}
      options={options}
      optionSelector="value"
      loading={false}
      onInputChange={onInputChange}
    />
  );
  const searchInput = screen.getByLabelText(searchLabel);
  fireEvent.change(searchInput, { target: { value: "example" } });
  expect(onInputChange).toHaveBeenCalledWith("example");
});
