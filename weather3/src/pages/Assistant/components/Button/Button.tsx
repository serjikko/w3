import { ReactNode } from "react";
import s from "./Button.module.scss";

interface Props {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
}

const Button = ({ children, onClick, isLoading }: Props) => {
  return (
    <button
      className={`${s.button} ${isLoading ? s.loading : ""}`}
      onClick={() => onClick()}
    >
      <div className={s.loading_icon}></div>
      <div className={s.text}>{children}</div>
    </button>
  );
};

export default Button;
