import useApi from "./useApi";

const usePlaces = () => {
  const { fetchApi, loading, data, error } = useApi();

  const fetchPlaces = (search: string) => {
    const url = `${process.env.REACT_APP_MAPBOX_API_BASE_URL}/mapbox.places/${search}.json?proximity=ip&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&autocomplete=true&types=place`;

    fetchApi(url);
  };

  return {
    fetchPlaces,
    data,
    loading,
    error,
  };
};

export default usePlaces;
