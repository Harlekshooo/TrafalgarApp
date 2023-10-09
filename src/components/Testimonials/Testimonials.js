import classes from "./Testimonials.module.css";
import guy from "../../assets/profile picture.png";
import React, { Component } from "react";
import Slider from "react-slick";


export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrow: true,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
  
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topText}>
          <h2>What our customers are saying</h2>
          <hr />
        </div>

        <Slider {...settings} className={classes.slide}>
        <div className={classes.slideWrap}>
        <div className={classes.bottomText}>
          <div className={classes.profileArea}>
            <div className={classes.profileImage}>
              <img src={guy} alt="/" />
            </div>
            <div className={classes.profile}>
              <h4>Edward Newgate</h4>
              <p>Founder Circle</p>
            </div>
          </div>
          <div className={classes.textArea}>
            <p>
              "Our dedicated patient engagement app and web portal allow you to
              access information instantaneously(no tedious form, long calls, or
              administrative hassle) and securely"
            </p>
          </div>
        </div>
        </div>

        <div className={classes.slideWrap}>
        <div className={classes.bottomText}>
          <div className={classes.profileArea}>
            <div className={classes.profileImage}>
              <img className={classes.profileImagee} src={guy} alt="/" />
            </div>
            <div className={classes.profile}>
              <h4>Alex Adekola</h4>
              <p>CEO Adekola Holdings</p>
            </div>
          </div>
          <div className={classes.textArea}>
            <p>
              "Our dedicated patient engagement app and web portal allow you to
              access information instantaneously(no tedious form, long calls, or
              administrative hassle) and securely"
            </p>
          </div>
        </div>
        </div>

        
        <div className={classes.slideWrap}>
        <div className={classes.bottomText}>
          <div className={classes.profileArea}>
            <div className={classes.profileImage}>
              <img src={guy} alt="/" />
            </div>
            <div className={classes.profile}>
              <h4>Adekunle Emmanuel</h4>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className={classes.textArea}>
            <p>
              "Our dedicated patient engagement app and web portal allow you to
              access information instantaneously(no tedious form, long calls, or
              administrative hassle) and securely"
            </p>
          </div>
        </div>
        </div>
        </Slider>

      </div>
    </div>
  );
};
}

