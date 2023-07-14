export interface IWeatherData {
  current: {
    condition: { text: string; icon: string };
    temp_c: number;
  };
  location: {
    country: string;
    localtime: string;
    localtime_epoch: number;
    name: string;
    region: string;
  };
}
