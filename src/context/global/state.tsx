import { useState } from "react";
import { IWeatherData } from "../../interfaces/weather";

export const useGlobalState = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [weatherHistory, setWeatherHistory] = useState<IWeatherData[]>([]);
  const [loadingWeatherHistory, setLoadingWeatherHistory] = useState(false);

  return {
    selectedPlace,
    setSelectedPlace,
    weatherHistory,
    setWeatherHistory,
    loadingWeatherHistory,
    setLoadingWeatherHistory,
  };
};
