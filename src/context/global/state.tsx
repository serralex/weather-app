import { useState } from "react";

export const useGlobalState = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [weatherHistory, setWeatherHistory] = useState([]);
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
