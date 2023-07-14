import { Skeleton } from "@mui/material";
import PrimaryWeatherCard from "../../components/WeatherCard/WeatherCard";
import { useGlobalContext } from "../../context/global/global-context";
import { IWeatherData } from "../../interfaces/weather";

const RecentSearchedPlaces = () => {
  const { weatherHistory, loadingWeatherHistory } = useGlobalContext();
  const recentPlaces = weatherHistory.slice(1, 4);

  if (recentPlaces?.length === 0) return null;
  if (loadingWeatherHistory)
    return <Skeleton variant="rounded" width={"100%"} height={300} />;
  return (
    <>
      <h2 className="pb-8">Recently searched cities</h2>

      {loadingWeatherHistory ? (
        <Skeleton variant="rounded" width={"100%"} height={300} />
      ) : (
        <div className="grid md:grid-cols-3 gap-4 ">
          {recentPlaces.map((data: IWeatherData, i: number) => {
            if (!data) return null;
            return (
              <div className="flex-1" key={i}>
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
            );
          })}
        </div>
      )}
    </>
  );
};

export default RecentSearchedPlaces;
