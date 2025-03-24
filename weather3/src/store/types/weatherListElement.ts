export type WeatherListElement = {
  dt_txt: string,
  main: {
    temp: number,
  },
  weather: 
    {
      main: string,
      description: string
    }[],
};
    