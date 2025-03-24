import React from "react";
import Select from "react-select";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import { Weather } from "../../../../store/types/weather";

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const degreesToSide = (deg: number) => {
  if (deg === 0 || deg === 360) return "восток";
  if (deg === 90) return "север";
  if (deg === 180) return "запад";
  if (deg === 270) return "юг";

  if (1 <= deg || deg <= 89) return "северо-восток";
  if (91 <= deg || deg <= 179) return "северо-запад";
  if (181 <= deg || deg <= 269) return "юго-запад";
  if (271 <= deg || deg <= 359) return "юго-восток";
};

export const ThisDayInfo = ({ weather }: Props) => {
  const getWindSide = degreesToSide(weather.wind.deg);

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(
        weather.main.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      name: "Влажность",
      value: `${weather.main.humidity}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weather.wind.speed} м/с - ${getWindSide}`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
