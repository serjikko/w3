import React from "react";

import s from "./Days.module.scss";

type Props = {
  changeTab: (id: number) => void;
};
type tab = {
  id: number;
  value: string;
};

export const Tabs = (props: Props) => {
  const tabs: tab[] = [
    {
      id: 0,
      value: "День",
    },
    {
      id: 1,
      value: "На 5 дней",
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div
            className={s.tab}
            key={tab.value}
            onClick={(e) => props.changeTab(tab.id)}
          >
            {tab.value}
          </div>
        ))}
      </div>
      {/* <div className={s.cancel}>Отменить</div> */}
    </div>
  );
};
