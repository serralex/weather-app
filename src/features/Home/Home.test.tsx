import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("../../hooks/useLocation", () => ({
  __esModule: true,
  default: () => ({
    location: "New York",
    loading: false,
    error: undefined,
  }),
}));

jest.mock("../../hooks/useWeather", () => ({
  __esModule: true,
  default: () => ({
    fetchWeather: jest.fn(),
    loading: false,
    data: {
      current: {
        condition: {
          icon: "icon-url",
          text: "Cloudy",
        },
        temp_c: 25,
      },
      location: {
        name: "New York",
        region: "NY",
        country: "USA",
        localtime: "2023-07-15 10:00",
      },
    },
    error: undefined,
  }),
}));

jest.mock("../../context/global/global-context", () => ({
  useGlobalContext: () => ({
    selectedPlace: "New York",
    setSelectedPlace: jest.fn(),
    setWeatherHistory: jest.fn(),
    weatherHistory: [],
    loadingWeatherHistory: false,
    setLoadingWeatherHistory: jest.fn(),
  }),
}));

test("searches and selects an option, displays weather information", async () => {
  render(<Home />);
  await screen.findByText("Your city");

  const searchInput = screen.getByLabelText("Search for a city");
  fireEvent.change(searchInput, { target: { value: "New York" } });
  fireEvent.keyDown(searchInput, { key: "Enter" });

  await screen.findByText("25ºC");

  expect(screen.getByText("25ºC")).toBeInTheDocument();
  expect(screen.getByText("Cloudy")).toBeInTheDocument();
  expect(screen.getByText("New York, NY, USA")).toBeInTheDocument();
  expect(screen.getByText("2023-07-15 10:00")).toBeInTheDocument();
});
