import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";

import s from "./Days.module.scss";

interface Props {
  // DECOMPOSE THAT
  day: {
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
    };
    weather: [
      {
        main: string;
      }
    ];
  };
}

type FIXME = any;

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>
        {day.dt_txt.slice(5, 7)}.{day.dt_txt.slice(8, 10)}
      </div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.weather[0].main} />
      </div>
      <div className={s.temp__day}>
        {Number((day.main.temp - 273.15).toFixed(1))}
      </div>
      <div className={s.temp__night}>
        {`Ощущается ${Number((day.main.feels_like - 273.15).toFixed(1))}`}
      </div>
      <div className={s.info}>{day.weather[0].main}</div>
    </div>
  );
};
