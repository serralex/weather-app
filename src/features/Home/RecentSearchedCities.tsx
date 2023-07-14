import { Skeleton } from "@mui/material";
import PrimaryWeatherCard from "../../components/WeatherCard/WeatherCard";
import { IWeatherData } from "../../interfaces/weather";

interface IProps {
  recentPlaces: IWeatherData[];
  loading: boolean;
}
const RecentSearchedCities = ({ recentPlaces, loading }: IProps) => {
  if (!recentPlaces.length) return null;

  return (
    <>
      <h2 className="pb-8">Recently searched cities</h2>
      {loading ? (
        <Skeleton variant="rounded" width={"100%"} height={300} />
      ) : (
        <div className="grid md:grid-cols-3 gap-4 ">
          {recentPlaces.map((data: IWeatherData) => (
            <div
              key={data.location.name + data.location.localtime_epoch}
              className="flex-1"
            >
              <PrimaryWeatherCard
                key={data.location.name}
                icon={{
                  url: data.current.condition.icon,
                  alt: data.current.condition.text,
                }}
                temperature={data.current.temp_c}
                condition={data.current.condition.text}
                place={`${data.location.name}, ${data.location.region}, ${data.location.country}`}
                date={data.location.localtime}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RecentSearchedCities;
