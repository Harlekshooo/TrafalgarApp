import React from 'react'
import classes from "./First.module.css"
import firstImage from "../../assets/first big image.png"
import dots from "../../assets/dots.png"


const First = () => {
  return (
    <div className={classes.container}>
    <div className={classes.heroContent}>
      <div className={classes.textContainer}>
      <h1>Virtual healthcare for you</h1>
      <p>Trafalgar provides progressive, and affordable healthcare, accesible on mobile and online for everyone</p>
      <button>Consult today</button>
      </div>
      <div className={classes.imageContainer}>
        <img src={firstImage} alt='/'/>
      </div>
    </div>
      <div className={classes.dotContainer}>
        <img src={dots} alt='/'/>
      </div>
</div>
  )
}

export default First