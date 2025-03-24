import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";
import Form from "./Form/Form";
import { useNavigate } from "react-router-dom";
import { storage } from "../../model/Storage";

interface Props {}
type SelectOption = { label: string; value: string };

export const Header = (props: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const options: SelectOption[] = [
    { value: "Moscow", label: "Погода" },
    { value: "News", label: "Новости" },
    { value: "About", label: "О проекте" },
    { value: "Assistant", label: "Ассистент" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Информационный портал</div>
      </div>
      <div className={(s.wrapper, s.right)}>
        <div className={s.form}>
          <Form />
        </div>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
          onChange={(e: SingleValue<{ value: string; label: string }>) => {
            if (e) {
              navigate(e.value);
            }
          }}
        />
      </div>
    </header>
  );
};
