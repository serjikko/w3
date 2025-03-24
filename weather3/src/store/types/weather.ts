export type Weather = {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  },
  weather: [ 
    {main: string;}
  ];
  wind: {
    speed: number,
    deg: number,
  }
  name: string,
  timezone: number,
  dt: number
};
