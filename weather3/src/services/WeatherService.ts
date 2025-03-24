import { AxiosResponse } from 'axios';
import api from '../axios/index';
import weekWeatherApi from '../axios/weekWeatherApi';
import { Weather } from '../store/types/weather';
import RSSApi from '../axios/RSSApi';
import { RSSResponse } from '../store/types/RSSResponse';
import { weekWeatherElement } from '../store/types/weekWeatherElement';


export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }

  static getWeekWeather(city: string): Promise<AxiosResponse<{list: weekWeatherElement[]}>> {
    return weekWeatherApi.get<{list: weekWeatherElement[]}>(`/forecast?q=${city}`);
  }

  static getRSS(): Promise<AxiosResponse<RSSResponse>> {
    return RSSApi.get<RSSResponse>('');
  }
}
