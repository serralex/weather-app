export interface IWeatherData {
  current: {
    condition: { text: string; icon: string; code: number };
    temp_c: number;
  };
  location: {
    country: string;
    localtime: string;
    name: string;
    region: string;
  };
}
