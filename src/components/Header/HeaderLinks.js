import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Header.module.css'

const HeaderLinks = () => {
  return (
    <div className={classes.sidebar}>
        <nav className={classes.sidebarLinks}>
           <Link to='/'><li>Home</li></Link>
           <Link to='/contact'><li>Contact Us</li></Link>
            <li>Apps</li>
            <li>Testimonials</li>
            <li>About us</li>
        </nav>
        </div>
  )
}

export default HeaderLinks