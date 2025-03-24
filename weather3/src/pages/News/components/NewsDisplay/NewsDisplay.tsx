import React from "react";
import s from "./NewsDisplay.module.scss";
import { RSSResult } from "../../../../store/types/RSSResult";

type Props = {
  result: RSSResult;
};

const NewsDisplay = (props: Props) => {
  return (
    <div className={s.wrapper}>
      <div
        className={s.image}
        style={{ backgroundImage: `url(${props.result.image_url})` }}
      ></div>
      <div className={s.text}>
        <div className={s.title}>{props.result.title}</div>
        <div className={s.description}>{props.result.description}</div>
      </div>
    </div>
  );
};

export default NewsDisplay;
