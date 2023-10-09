import React from "react";
import classes from "./Healthcare.module.css";
import secondImage from "../../assets/second big image.png";
import thirdDots from "../../assets/dots.png"

const Healthcare = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.imageContainer}>
          <img src={secondImage} alt="/" />
        </div>
        <div className={classes.textArea}>
          <h3>Leading healthcare providers</h3>
          <hr />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for eveeryone. To us, it's not just
            work. We take pride in the solutions we deliver.
          </p>
          <div className={classes.buttonContainer}><button className={classes.learn}>Learn more</button></div>
        </div>
      </div>
      <div className={classes.thirdDotsContainer}>
        <img src={thirdDots} alt='/'/>
      </div>
    </div>
  );
};

export default Healthcare;
