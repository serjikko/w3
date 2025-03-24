import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import selectors from "../../store/selectors";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { useParams } from "react-router-dom";

import s from "./Home.module.scss";
import { fetchWeekWeather } from "../../store/thunks/fetchWeekWeather";

interface Props {}
type urlParams = {
  city: "string";
};

export const Home = (props: Props) => {
  const params = useParams<urlParams>();

  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectors.selectCurrentWeatherData);
  const { list: weekWeather } = useCustomSelector(
    selectors.selectWeekWeatherData
  );

  useEffect(() => {
    if (params.city) {
      dispatch(fetchCurrentWeather(params.city));
      dispatch(fetchWeekWeather(params.city));
    }
  }, [dispatch, params.city]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days weather={weekWeather} />
    </div>
  );
};
