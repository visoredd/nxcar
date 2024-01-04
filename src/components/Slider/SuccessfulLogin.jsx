import React from "react";
import style from "./slider.module.scss";

const SuccessfulLogin = () => {
  return (
    <div className={style.successfullLogin}>
      <div>
        <img src="assets/images/Congratulations.png" alt="Successfull login" />
      </div>
    </div>
  );
};

export default SuccessfulLogin;
