import { TextField } from "@mui/material";
import React, { useState } from "react";
import style from "./slider.module.scss";

const LoginDetails = ({ setNextSlide }) => {
  const [form, setForm] = useState({
    number: "",
    name: "",
    email: "",
    vehicle: "",
  });
  const [error, setError] = useState({
    number: "",
  });

  const handleChange = (event) => {
    const regex = /^[0-9]{10}$/;
    if (event.target.name === "number") {
      if (regex.test(event.target.value)) {
        setError({});
      } else {
        setError({
          number: "Please enter valid number only",
        });
      }
    }
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const next = () => {
    if (!Object.keys(error).length) {
      setNextSlide((prev) => prev + 1);
    }
  };
  return (
    <div>
      <div className={style.heading}>
        <div>Want to buy a car?</div>
      </div>
      <div>Please fill out the details</div>
      <div className={style.gridContainer}>
        <TextField
          value={form.number}
          required
          autoFocus
          onChange={(event) => handleChange(event)}
          name="number"
          error={error?.number}
          label="Enter your number"
          helperText={error?.number || " "}
        />
        <TextField
          label="Enter your name"
          value={form.name}
          onChange={(event) => handleChange(event)}
          name="name"
        />
        <TextField
          label="Enter your email"
          value={form.email}
          onChange={(event) => handleChange(event)}
          name="email"
        />
        <TextField
          label="Enter Vehicle Number"
          value={form.vehicle}
          onChange={(event) => handleChange(event)}
          name="vehicle"
        />
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default LoginDetails;
