import { WeatherService } from '../../services/WeatherService';
import {weekWeatherSlice} from '../slices/weekWeatherSlice';
import { AppDispatch } from '../store';

export const fetchWeekWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weekWeatherSlice.actions.fetchWeekWeather());
      const res = await WeatherService.getWeekWeather(payload);
      if (res.status === 200) {
        dispatch(weekWeatherSlice.actions.fetchWeekWeatherSuccess(res));
      } else {
        dispatch(weekWeatherSlice.actions.fetchWeekWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };


