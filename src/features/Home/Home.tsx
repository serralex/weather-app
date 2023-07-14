import { useEffect } from "react";
import Layout from "../../components/ui/Layout";
import { useGlobalContext } from "../../context/global/global-context";
import useLocation from "../../hooks/useLocation";
import useWeather from "../../hooks/useWeather";
import MainWeather from "./MainWeather";
import RecentSearchedCities from "./RecentSearchedCities";

const Home = () => {
  const {
    weatherHistory,
    loadingWeatherHistory,
    selectedPlace,
    setSelectedPlace,
    setWeatherHistory,
  } = useGlobalContext();

  const {
    location,
    loading: loadingLocation,
    isActive: isLocationActive,
  } = useLocation();

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
    if (dataWeather) setWeatherHistory((prev: any) => [dataWeather, ...prev]);
  }, [dataWeather, setWeatherHistory]);

  if (errorWeather) return <Layout>{errorWeather.message}</Layout>;
  return (
    <Layout>
      <MainWeather
        data={dataWeather}
        loading={
          loadingWeather ||
          (!dataWeather && loadingLocation && isLocationActive)
        }
      />
      <RecentSearchedCities
        recentPlaces={weatherHistory.slice(1, 4)}
        loading={loadingWeatherHistory}
      />
    </Layout>
  );
};

export default Home;
