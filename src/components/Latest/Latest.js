import React from "react";
import classes from "./Latest.module.css";
import bloodTest from "../../assets/blood-test.png";
import science from "../../assets/scientist.png";
import skinCare from "../../assets/skin-care.png";
import nextArrow from "../../assets/Next Arrow.png";

const Latest = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topText}>
          <h3>Check out our latest article</h3>
          <hr />
        </div>
        <div className={classes.offerContainer}>
          <div className={classes.offer}>
            <div className={classes.bloodTestContainer}>
              <img src={bloodTest} alt="/" />
            </div>
            <div className={classes.textOver}>
              <h4>Disease detection, check up in the laboratory</h4>
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <div className={classes.linkContainer}>
                <a className={classes.read} href="##">
                  Read more <img src={nextArrow} alt="/" />
                </a>
              </div>
            </div>
          </div>

          <div className={classes.offer}>
            <div className={classes.bloodTestContainer}>
              <img src={science} alt="/" />
            </div>
            <div className={classes.textOver}>
              <h4>Herbal medicines that are safe for consumption</h4>
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <div className={classes.linkContainer}>
                <a className={classes.read} href="##">
                  Read more <img src={nextArrow} alt="/" />
                </a>
              </div>
            </div>
          </div>

          <div className={classes.offer}>
            <div className={classes.bloodTestContainer}>
              <img src={skinCare} alt="/" />
            </div>
            <div className={classes.textOver}>
              <h4>Natural care for healthy facial skin</h4>
              <p>
                A healthy lifestyle should start from now and also for your skin
                health. There are some...
              </p>
              <div className={classes.linkContainer}>
                <a className={classes.read} href="##">
                  Read more <img src={nextArrow} alt="/" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.view}>View all</button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
