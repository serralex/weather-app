import { render, screen } from "@testing-library/react";
import MainWeather from "./MainWeather";

describe("MainWeather", () => {
  const weatherData = {
    current: {
      condition: {
        icon: "icon.png",
        text: "Sunny",
      },
      temp_c: 25,
    },
    location: {
      name: "City",
      region: "Region",
      country: "Country",
      localtime: "2023-07-14 12:00:00",
      localtime_epoch: 99999,
    },
  };

  test("renders WeatherCard when loading is false", () => {
    render(
      <MainWeather data={weatherData} loading={false} title="Your city" />
    );
    const weatherCardElement = screen.getByTestId("weather-card");
    expect(weatherCardElement).toBeInTheDocument();
  });
});
