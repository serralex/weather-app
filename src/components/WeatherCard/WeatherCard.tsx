import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Divider } from "@mui/material";

interface IProps {
  icon: { url: string; alt: string };
  temperature: number;
  condition: string;
  place: string;
  date: string;
}

const WeatherCard = ({ icon, temperature, condition, place, date }: IProps) => {
  return (
    <div className="w-full bg-[#111] dark:bg-[#1a1a1a] p-8 rounded-lg h-full">
      <div>
        <img src={icon.url} alt={icon.alt}></img>
        <p className="text-4xl font-bold">{temperature}ºC</p>
        <p>{condition}</p>
        <Divider className="my-4" />
        <div className="flex flex-col ali">
          <p>
            <LocationOnIcon className="mr-1" />
            {place}
          </p>
          <p>
            <ScheduleIcon className="mr-1" />
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
