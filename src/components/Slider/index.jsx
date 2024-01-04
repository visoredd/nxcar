import { TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import LoginDetails from "./LoginDetails";
import CloseIcon from "@mui/icons-material/Close";
import style from "./slider.module.scss";
import Otp from "./Otp";
import SuccessfulLogin from "./SuccessfulLogin";

const SliderLogin = ({ setOpenForm }) => {
  const [nextSlide, setNextSlide] = useState(1);

  const SliderComp = useCallback(() => {
    switch (nextSlide) {
      case 1:
        return <LoginDetails setNextSlide={setNextSlide} />;
      case 2:
        return <Otp setNextSlide={setNextSlide} />;
      case 3:
        return <SuccessfulLogin />;
      default:
        return <LoginDetails setNextSlide={setNextSlide} />;
    }
  }, [nextSlide]);
  return (
    <div className={style.sliderWindow}>
      <div className={style.slider}>
        <div className={style.close}>
          <CloseIcon
            onClick={() => setOpenForm(false)}
            sx={{ cursor: "pointer" }}
          />
        </div>

        <SliderComp />
      </div>
    </div>
  );
};

export default SliderLogin;
