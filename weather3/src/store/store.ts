import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weekWeatherSliceReducer from './slices/weekWeatherSlice';
import currentWeatherSliceReducer from './slices/currentWeatherSlice';
import RSSSliceReducer from './slices/RSSSlice';
import assistantSliceReducer from './slices/assistantSlice';

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  weekWeatherSliceReducer,
  RSSSliceReducer,
  assistantSliceReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
