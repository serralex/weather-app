import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

test("renders WeatherCard component", () => {
  const props = {
    icon: { url: "icon-url", alt: "icon-alt" },
    temperature: 25,
    condition: "Sunny",
    place: "Oslo",
    date: "2023-07-14",
  };

  render(<WeatherCard {...props} />);

  const weatherCard = screen.getByTestId("weather-card");
  expect(weatherCard).toBeInTheDocument();
});
