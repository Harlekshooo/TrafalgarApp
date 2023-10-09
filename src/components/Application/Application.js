import React from "react";
import classes from "./Application.module.css";
import thirdImage from "../../assets/third big image.png";

const Application = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.textArea}>
          <h3>Download our mobile apps</h3>
          <hr/>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button>Download&#8595;</button>
        </div>
        <div className={classes.imageContainer}>
            <img src={thirdImage} alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default Application;
