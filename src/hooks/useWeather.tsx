import { useCallback } from "react";
import useApi from "./useApi";

const useWeather = () => {
  const { fetchApi, loading, data, error } = useApi();

  const fetchWeather = useCallback(
    async (place: string) => {
      const url = `${process.env.REACT_APP_WEATHER_API_BASE_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${place}&aqi=no`;

      fetchApi(url);
    },
    [fetchApi]
  );

  return {
    fetchWeather,
    data,
    loading,
    error,
  };
};

export default useWeather;
