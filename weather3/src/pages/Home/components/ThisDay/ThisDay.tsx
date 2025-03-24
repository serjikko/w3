import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/weather";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

function formatUnixTime(epochTime: any, utcOffsetSeconds: any, options = {}) {
  const date = new Date((epochTime + utcOffsetSeconds) * 1000);
  return date.toLocaleTimeString([], { timeZone: "UTC", ...options });
}

function getLongFormatUnixTime(epochTime: any, utcOffsetSeconds: any) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour24: true,
  };
  return formatUnixTime(epochTime, utcOffsetSeconds, options);
}

export const ThisDay = ({ weather }: Props) => {
  const time = getLongFormatUnixTime(weather.dt, weather.timezone);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id={weather.weather[0].main} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{time}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};
