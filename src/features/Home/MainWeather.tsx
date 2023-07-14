import { Skeleton } from "@mui/material";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { IWeatherData } from "../../interfaces/weather";

interface IProps {
  data: IWeatherData;
  loading: boolean;
}

const MainWeather = ({ data, loading }: IProps) => {
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

  return (
    <div className="w-full justify-center pb-8">
      {loading ? (
        <Skeleton variant="rounded" width={"100%"} height={300} />
      ) : (
        weatherCardProps && <WeatherCard {...weatherCardProps} />
      )}
    </div>
  );
};

export default MainWeather;
