import usePlaces from "../../hooks/usePlaces";
import Header from "../../components/ui/Header/Header";
import SearchAutocomplete from "../../components/SearchAutocomplete/SearchAutocomplete";

import { useGlobalContext } from "../../context/global/global-context";
import RecentSearchedPlaces from "./RecentSearchedPlaces";
import Layout from "../../components/ui/Layout/Layout";
import MainWeather from "./MainWeather";

const Home = () => {
  const { setSelectedPlace } = useGlobalContext();

  const {
    fetchPlaces,
    loading: loadingPlaces,
    data: dataPlaces,
    error: errorPlaces,
  } = usePlaces();

  return (
    <Layout
      headerComp={
        <Header
          title="Your Weather App"
          rightComp={
            <SearchAutocomplete
              searchLabel={"Search for a city"}
              loading={loadingPlaces}
              error={errorPlaces}
              options={dataPlaces?.features}
              optionSelector="place_name"
              onInputChange={fetchPlaces}
              onChange={(value) => setSelectedPlace(value)}
            />
          }
        />
      }
      contentComp={
        <>
          <MainWeather />
          <div className="pt-8">
            <RecentSearchedPlaces />
          </div>
        </>
      }
    />
  );
};

export default Home;
