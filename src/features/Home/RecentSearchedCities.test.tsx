import { render, screen } from "@testing-library/react";
import RecentSearchedCities from "./RecentSearchedCities";

test("renders recent cities correctly", () => {
  const mockWeatherData = [
    {
      location: {
        name: "City 1",
        region: "Region 1",
        country: "Country 1",
        localtime: "2023-07-14",
        localtime_epoch: 123496789,
      },
      current: {
        temp_c: 25,
        condition: {
          icon: "icon-url-1",
          text: "Sunny",
        },
      },
    },
    {
      location: {
        name: "City 2",
        region: "Region 2",
        country: "Country 2",
        localtime: "2023-07-15",
        localtime_epoch: 123456789,
      },
      current: {
        temp_c: 20,
        condition: {
          icon: "icon-url-2",
          text: "Cloudy",
        },
      },
    },
  ];

  render(
    <RecentSearchedCities recentPlaces={mockWeatherData} loading={false} />
  );

  expect(screen.getByText("Recently searched cities")).toBeInTheDocument();

  expect(screen.getByText("City 1, Region 1, Country 1")).toBeInTheDocument();
  expect(screen.getByText("City 2, Region 2, Country 2")).toBeInTheDocument();

  expect(screen.getByText("25ºC")).toBeInTheDocument();
  expect(screen.getByAltText("Sunny")).toBeInTheDocument();
  expect(screen.getByText("20ºC")).toBeInTheDocument();
  expect(screen.getByAltText("Cloudy")).toBeInTheDocument();
});
