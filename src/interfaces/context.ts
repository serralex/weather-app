export interface IGlobal {
  selectedPlace: string;
  setSelectedPlace: (selectedPlace: string) => void;
  weatherHistory: any;
  setWeatherHistory: (weatherHistory: any) => void;
  loadingWeatherHistory: boolean;
  setLoadingWeatherHistory: (loadingWeatherHistory: boolean) => void;
}
