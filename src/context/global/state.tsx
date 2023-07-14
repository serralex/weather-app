import { useState } from "react";

export const useGlobalState = () => {
  const [selectedPlace, setSelectedPlace] = useState();
  const [weatherHistory, setWeatherHistory] = useState([]);
  return { selectedPlace, setSelectedPlace, weatherHistory, setWeatherHistory };
};
