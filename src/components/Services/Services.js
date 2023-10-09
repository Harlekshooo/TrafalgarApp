import React from "react";
import classes from "./Services.module.css";
import scope from "../../assets/microscope.png";
import bottlee from "../../assets/bottle.png";
import phonee from "../../assets/phone.png";
import notepadd from "../../assets/notepad.png";
import healthh from "../../assets/health.png";
import healthCard from "../../assets/health-card.png";
// import fruit from "../../assets/Mango-shape.png";
// import dots from "../../assets/dots.png"

const Services = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topText}>
          <h3>Our services</h3>
          <hr />
          <p>
            We provide to you the best choices for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              <img className={classes.scopee} src={scope} alt="/" />
              <h4>Search doctor</h4>
              <p>
                Choose your doctor from thousands of specialist, general and
                trusted hospitals
              </p>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardContent}>
              <img className={classes.bottleee} src={bottlee} alt="/" />
              <h4>Online pharmacy</h4>
              <p>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              <img className={classes.phoneee} src={phonee} alt="/" />
              <h4>Consultation</h4>
              <p>
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              <img className={classes.notepaddd} src={notepadd} alt="/" />
              <h4>Details info</h4>
              <p>
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              <img className={classes.healthhh} src={healthh} alt="/" />
              <h4>Emergency care</h4>
              <p>
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardContent}>
              <img className={classes.healthCardd} src={healthCard} alt="/" />
              <h4>Tracking</h4>
              <p>Teack and save your medical history and health data</p>
            </div>
          </div>
        </div>
      {/* <img className={classes.horizontalFruit} src={fruit} alt="/"/> */}
      {/* <div className={classes.secondDotsContainer}><img className={classes.secondDots} src={dots} alt="/"/></div> */}
      <div className={classes.buttonContainer}><button className={classes.learn}>Learn more</button></div>
      </div>
    </div>
  );
};

export default Services;
