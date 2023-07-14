import { useEffect } from "react";
import { Skeleton } from "@mui/material";

import { useGlobalContext } from "../../context/global/global-context";
import useWeather from "../../hooks/useWeather";
import useLocation from "../../hooks/useLocation";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const MainWeather = () => {
  const {
    location,
    loading: loadingLocation,
    isActive: isLocationActive,
  } = useLocation();
  const { selectedPlace, setSelectedPlace, setWeatherHistory } =
    useGlobalContext();
  const {
    fetchWeather,
    loading: loadingWeather,
    data: dataWeather,
    error: errorWeather,
  } = useWeather();

  useEffect(() => {
    if (!location) return;
    setSelectedPlace(location);
  }, [location, setSelectedPlace]);

  useEffect(() => {
    if (!selectedPlace) return;

    fetchWeather(selectedPlace);
  }, [selectedPlace, fetchWeather]);

  useEffect(() => {
    if (!dataWeather) return;
    setWeatherHistory((prev: any) => [dataWeather, ...prev]);
  }, [dataWeather, setWeatherHistory]);

  if (errorWeather) return <div>Something went wrong</div>;
  if (!dataWeather && loadingLocation && isLocationActive)
    return <Skeleton variant="rounded" width={"100%"} height={300} />;
  return (
    <div className="w-full justify-center ">
      {loadingWeather ? (
        <Skeleton variant="rounded" width={"100%"} height={300} />
      ) : (
        dataWeather && (
          <WeatherCard
            icon={{
              url: dataWeather.current.condition.icon,
              alt: dataWeather.current.condition.text,
            }}
            temperature={dataWeather.current.temp_c}
            condition={dataWeather.current.condition.text}
            place={`${dataWeather.location.name}, ${dataWeather.location.region}, ${dataWeather.location.country}`}
            date={dataWeather.location.localtime}
          />
        )
      )}
    </div>
  );
};

export default MainWeather;
