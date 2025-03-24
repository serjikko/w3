export type weekWeatherElement = {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  },
  weather: [ 
    {
      main: string;
      description: string;
    }
  ];
  wind: {
    speed: number,
    deg: number,
  }
  dt: number,
  dt_txt: string
};
