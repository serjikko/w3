import { useState } from "react";
import { Card } from "./Card";
import { CardHours } from "./CardHours";

import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

interface Props {}

type FIXME = any;

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = ({ weather }: FIXME) => {
  const changeTab = (id: number): void => {
    setCurrentTabId(id);
  };

  const [currentTabId, setCurrentTabId] = useState<number>(0);

  const weekWeather = [];

  for (let i: number = 0; i < weather.length; i++) {
    if (i % 6 === 0) weekWeather.push(weather[i]);
  }
  return (
    <>
      <Tabs changeTab={changeTab} />
      <div className={s.days}>
        {currentTabId === 0
          ? weather
              .slice(0, 7)
              .map((el: FIXME, index: number) => (
                <CardHours key={index} hour={el} />
              ))
          : weekWeather
              .slice(0, 7)
              .map((el: FIXME, index: number) => <Card day={el} key={index} />)}

        {}
      </div>
    </>
  );
};
