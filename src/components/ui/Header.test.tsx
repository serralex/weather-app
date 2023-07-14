import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders Header without errors", () => {
  render(<Header />);
});

test("displays correct header text", () => {
  render(<Header />);
  const headerText = screen.getByText("Your Weather App");
  expect(headerText).toBeInTheDocument();
});

test("renders search autocomplete component", () => {
  render(<Header />);
  const searchAutocomplete = screen.getByLabelText("Search for a city");
  expect(searchAutocomplete).toBeInTheDocument();
});
