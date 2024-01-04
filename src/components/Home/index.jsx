import React, { useState } from "react";
import Header from "../Header";
import styles from "./main.module.scss";
import SliderLogin from "../Slider";

const Home = () => {
  // Mainting State to Toggle login Form
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className={styles.container}>
      <Header setOpenForm={setOpenForm} />
      <main>
        <div className={styles.frames}>
          <img
            src="assets/images/Frame-6.png"
            alt="Frame-6"
            className={styles.frame6}
            style={{ zIndex: 0 }}
          />
          <img
            src="assets/images/Frame-5.png"
            alt="Frame-5"
            className={styles.frame5}
            style={{ zIndex: 1 }}
          />
          <img
            src="assets/images/Frame-4.png"
            alt="Frame-4"
            className={styles.frame4}
            style={{ zIndex: 2 }}
          />
          <img
            src="assets/images/Frame-3.png"
            alt="Frame-3"
            className={styles.frame3}
            style={{ zIndex: 3 }}
          />
          <img
            src="assets/images/Frame-2.png"
            alt="Frame-2"
            className={styles.frame2}
            style={{ zIndex: 4 }}
          />
          <img
            src="assets/images/Frame-1.png"
            alt="Frame-1"
            className={styles.frame1}
            style={{ zIndex: 5 }}
          />
          <img
            src="assets/images/Frame-0.png"
            alt="Frame-0"
            className={styles.frame0}
            style={{ zIndex: 6 }}
          />
        </div>
        <div className={styles.spin}>Take A SPIN</div>
        <div className={styles.getStarted}>
          <button onClick={() => setOpenForm(true)}>Get Started</button>
        </div>
      </main>
      {openForm ? <SliderLogin setOpenForm={setOpenForm} /> : null}
    </div>
  );
};

export default Home;
