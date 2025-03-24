import React from "react";
import s from "./News.module.scss";
import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import selectors from "../../store/selectors";
import { fetchRSS } from "../../store/thunks/fetchRSS";
import NewsDisplay from "./components/NewsDisplay/NewsDisplay";

const News = () => {
  const dispatch = useCustomDispatch();
  const { results } = useCustomSelector(selectors.selectRSSData);

  useEffect(() => {
    dispatch(fetchRSS(""));
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.pageTitle}>Последние новости о погоде</div>
      {results.map((result, index) => (
        <NewsDisplay result={result} key={index} />
      ))}
    </div>
  );
};

export default News;
