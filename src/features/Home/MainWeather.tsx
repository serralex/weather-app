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
  const { fetchWeather, loading: loadingWeather, data, error } = useWeather();

  useEffect(() => {
    if (!location) return;
    setSelectedPlace(location);
  }, [location, setSelectedPlace]);

  useEffect(() => {
    if (!selectedPlace) return;

    fetchWeather(selectedPlace);
  }, [selectedPlace, fetchWeather]);

  useEffect(() => {
    if (data) setWeatherHistory((prev: any) => [data, ...prev]);
  }, [data, setWeatherHistory]);

  const isLoading = !data && loadingLocation && isLocationActive;
  const weatherCardProps = data && {
    icon: {
      url: data.current.condition.icon,
      alt: data.current.condition.text,
    },
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    place: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
    date: data.location.localtime,
  };

  if (error) return <div>Something went wrong</div>;
  return (
    <div className="w-full justify-center pb-8">
      {isLoading || loadingWeather ? (
        <Skeleton variant="rounded" width={"100%"} height={300} />
      ) : (
        weatherCardProps && <WeatherCard {...weatherCardProps} />
      )}
    </div>
  );
};

export default MainWeather;
