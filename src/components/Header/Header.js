import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <div className={classes.container}>
       <header>
        <div className={classes.image}>
        <img src={logo} alt='/'/>
        </div>
        <nav>
           <Link to='/'><li>Home</li></Link>
           <Link to='/contact'><li>Contact Us</li></Link>
            <li>Apps</li>
            <li>Testimonials</li>
            <li>About us</li>
        </nav>
        <span className={classes.menuContainer}>&#8801;</span>
       </header>
    </div>
  )
}

export default Header