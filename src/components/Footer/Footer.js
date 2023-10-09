import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";
import fourthDots from "../../assets/dots.png"

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer>
        <div className={classes.logoPart}>
          <div className={classes.logoImg}>
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className={classes.listPart}>
            <div className={classes.innerListPart}>
                <h4>Company</h4>
                <div className={classes.pContainer}>
                <p>About</p>
                <p>Testimonials</p>
                <p>Find a doctor</p>
                <p>Apps</p>
                </div>
            </div>
            <div className={classes.innerListPart}>
                <h4>Region</h4>
                <div className={classes.pContainer}>
                <p>Indonesia</p>
                <p>Singapore</p>
                <p>Hong Kong</p>
                <p>Canada</p>
                </div>              
            </div>
            <div className={classes.innerListPart}>
                <h4>Help</h4>
                <div className={classes.pContainer}>
                <p>Help center</p>
                <p>Contact support</p>
                <p>Instructions</p>
                <p>How it works</p>
                </div>              
            </div>
        </div>
      </footer>
      <div className={classes.dot}>
        <img src={fourthDots} alt='/'/>
      </div>
    </div>
  );
};

export default Footer;
