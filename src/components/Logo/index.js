import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className={css.Logo}>
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
