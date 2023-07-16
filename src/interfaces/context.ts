import { IWeatherData } from "./weather";

type SetState<T> = (value: T | ((prevValue: T) => T)) => void;

export interface IGlobal {
  selectedPlace: string;
  setSelectedPlace: SetState<string>;
  weatherHistory: IWeatherData[];
  setWeatherHistory: SetState<IWeatherData[]>;
  loadingWeatherHistory: boolean;
  setLoadingWeatherHistory: SetState<boolean>;
}
