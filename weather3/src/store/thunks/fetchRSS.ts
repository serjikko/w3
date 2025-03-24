import { WeatherService } from '../../services/WeatherService';
import {RSSSlice} from '../slices/RSSSlice';
import { AppDispatch } from '../store';

export const fetchRSS =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(RSSSlice.actions.fetchRSS());
      const res = await WeatherService.getRSS();
      if (res.status === 200) {
        dispatch(RSSSlice.actions.fetchRSSSuccess(res));
      } else {
        dispatch(RSSSlice.actions.fetchRSSError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };


