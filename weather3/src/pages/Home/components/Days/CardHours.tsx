import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";

import s from "./Days.module.scss";

interface Props {
  day: Day;
}

const toCelTemp = (deg: number) => {
  return Number((deg - 273.15).toFixed(1));
};

export const CardHours = ({ hour }: any) => {
  return (
    <div className={s.card__hours}>
      <div className={s.day}>{hour.dt_txt.slice(11, -3)}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={hour.weather[0].main} />
      </div>
      <div className={s.temp__day}>{toCelTemp(hour.main.temp)}</div>
      <div className={s.info}>{hour.weather[0].description}</div>
    </div>
  );
};
