import React, { useEffect, useRef, useState } from "react";
import style from "./slider.module.scss";

const numberOfDigits = 4;
const correctOTP = "1234";

const Otp = ({ setNextSlide }) => {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const [timer, setTimer] = useState(20);
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
    if (index >= numberOfDigits - 1) {
      handleOtpSubmit(newArr);
    }
  }
  const handleOtpSubmit = (arr) => {
    let otpArr = arr || otp;
    if (otpArr.join("") !== "" && otpArr.join("") !== correctOTP) {
      setOtpError("Invalid OTP");
    } else {
      setOtpError(null);
      setNextSlide((prev) => prev + 1);
    }
  };
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  return (
    <div>
      <div className={style.heading}>
        <div>Want to buy a car?</div>
      </div>
      <div>Enter OTP to verify your number</div>
      <div className={style.gridContainer}>
        <div className={style.otpInput}>
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
              className={``}
            />
          ))}
        </div>
        <div className={style.otpError}>{otpError}</div>
        <div className={style.otpExpire}>
          <span>Otp will expire in </span>
          <span className={style.otpTimer}>
            00:00:{timer >= 10 ? timer : "0" + timer}
          </span>
        </div>

        <button
          onClick={() => {
            handleOtpSubmit();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Otp;
