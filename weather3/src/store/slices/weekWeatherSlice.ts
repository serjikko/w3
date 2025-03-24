import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { WeatherListElement } from '../types/weatherListElement';
import { weekWeatherElement } from '../types/weekWeatherElement';

type Weather = {
  list: WeatherListElement[];
  isLoading: boolean;
  response: Response;
};
type Response = {
  status: number;
  message: string;
};


const initialState: Weather = {
  list : [
      {
        dt_txt: '0000000000 00:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 03:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 06:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 09:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 12:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 15:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 18:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 00:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 03:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 06:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 09:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 12:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 15:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 18:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 00:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 03:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 06:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 09:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 12:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 15:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 18:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 00:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 03:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 06:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 09:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 12:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 15:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 18:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 00:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 03:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 06:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 09:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 12:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 15:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 18:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 00:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 03:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 06:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 09:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 12:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 15:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
      {
        dt_txt: '0000000000 18:00:00',
        main: {
          temp: 273.15,
        },
        weather: [
          {
            main: "Clear",
            description: 'Clear'
          }
        ],
      },
    ],
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
}

export const weekWeatherSlice = createSlice({
  name: 'week_weather',
  initialState,
  reducers: {
    fetchWeekWeather(state) {
      state.isLoading = true;
    },
    fetchWeekWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<{list: weekWeatherElement[]}>>
    ) {
      state.isLoading = false;
      state.list = action.payload.data.list;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchWeekWeatherError(
      state,
      action: PayloadAction<AxiosResponse<{list: weekWeatherElement[]}>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default weekWeatherSlice.reducer;
