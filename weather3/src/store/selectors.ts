import { RootState } from './store';

const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

const selectWeekWeatherData = (state: RootState) =>
  state.weekWeatherSliceReducer;

const selectRSSData = (state: RootState) =>
  state.RSSSliceReducer;

const selectAssistant = (state: RootState) => 
  state.assistantSliceReducer;


const selectors = {
  selectCurrentWeatherData,
  selectWeekWeatherData,
  selectRSSData, 
  selectAssistant
}


export default selectors