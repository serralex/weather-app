import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Divider } from "@mui/material";

interface IProps {
  icon: { url: string; alt: string };
  mode?: string;
  temperature: number;
  condition: string;
  place: string;
  date: string;
}

const WeatherCard = ({
  icon,
  temperature,
  mode = "dark",
  condition,
  place,
  date,
}: IProps) => {
  return (
    <div
      className={`${
        mode === "dark" ? "bg-[#1a1a1a]" : "bg-[#fff6f5] text-black"
      } w-full  p-8 rounded-lg h-full`}
      data-testid="weather-card"
    >
      <div>
        <img src={icon.url} alt={icon.alt}></img>
        <p className="text-4xl font-bold">{temperature}ºC</p>
        <p>{condition}</p>
        <Divider className="my-4" />
        <div className="flex flex-col ali">
          <p className="flex items-center">
            <LocationOnIcon className="mr-1" />
            {place}
          </p>
          <p className="flex items-center">
            <ScheduleIcon className="mr-1" />
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
