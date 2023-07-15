import { Skeleton } from "@mui/material";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { IWeatherData } from "../../interfaces/weather";

interface IProps {
  data: IWeatherData;
  loading: boolean;
  title: string;
  subtitle?: string;
}

const MainWeather = ({ data, loading, title, subtitle }: IProps) => {
  const weatherCardProps = data && {
    icon: {
      url: data.current.condition.icon,
      alt: data.current.condition.text,
    },
    mode: "dark",
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    place: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
    date: data.location.localtime,
  };

  return (
    <div className="w-full justify-center pb-8">
      <div className="pb-6">
        <h2
          className={`text-2xl md:text-3xl font-medium ${
            subtitle ? "pb-2" : ""
          }`}
        >
          {title}
        </h2>
        {subtitle && <p className="mb-0">{subtitle}</p>}
      </div>

      {loading ? (
        <Skeleton variant="rounded" width={"100%"} height={300} />
      ) : (
        weatherCardProps && <WeatherCard {...weatherCardProps} />
      )}
    </div>
  );
};

export default MainWeather;
