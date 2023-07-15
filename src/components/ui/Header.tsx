import { debounce } from "@mui/material";
import { useGlobalContext } from "../../context/global/global-context";
import usePlaces from "../../hooks/usePlaces";
import SearchAutocomplete from "../SearchAutocomplete/SearchAutocomplete";

const Header = () => {
  const { setSelectedPlace } = useGlobalContext();

  const {
    fetchPlaces,
    loading: loadingPlaces,
    data: dataPlaces,
    error: errorPlaces,
  } = usePlaces();
  return (
    <header className="bg-[#1a1a1a]">
      <nav
        className="flex-col md:flex-row mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/#" className="-m-1.5 p-1.5 font-medium pb-8 md:pb-0">
            <span>Your Weather App</span>
          </a>
        </div>
        <div className="flex">
          <SearchAutocomplete
            searchLabel={"Search for a city"}
            loading={loadingPlaces}
            error={errorPlaces}
            options={dataPlaces?.features}
            noOptionsText="No cities found"
            optionSelector="place_name"
            onInputChange={debounce(fetchPlaces, 200)}
            onChange={(value) => setSelectedPlace(value)}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
