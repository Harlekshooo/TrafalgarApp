import React, { useState } from "react";
import classes from './Header.module.css'
import logo from '../../assets/logo.png'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom'
import HeaderLinks from "./HeaderLinks";
// import { useEffect } from "react";

// const create = document.getElementsByClassName('.menuContainer')

// create.addEventListener('click', function(){
//   console.log('clicked button');
// })


  const Header = () => {
    // const [navOpen, setNavOpen] = useState(false);
  
    // const handleNavToggle = () => {
    //   setNavOpen(!navOpen);
    // };
  
    // const handleNavLinkClick = () => {
    //   setNavOpen(false);
    // };
    // const sideBar = document.getElementsByClassName(".sidebar")

    const [setNav, displaySetNav] = useState(false)
    

    const toggleNav = () => {
      console.log("clicked")
      displaySetNav(
        !setNav
        )
        // setColor(color) 
      }


      // useEffect(() => {
      //   document.body.style.backgroundColor = color
      // }, [color])
    
    // const styles = {
    //   menuContainer:{
        
    //   }

      
    // }
    


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

        {/* <div className={classes.menuContainer} style={{display: setNav ? 'none' : 'block', transform: setNav ? 'none' : 'rotate(360deg)', transition: setNav ? 'all linear 5s 5s' : 'all linear 5s 5s'}} onClick={() => toggleNav()}>&#8801;</div>
        <div className={classes.menuContainer} style={{display: setNav ? 'block' : 'none', transition: setNav ? 'all linear 5s 5s' : 'all linear 5s 5s', transform: setNav ? 'rotate(360deg)' : 'none'}} onClick={() => toggleNav()}>&#215;</div> */}

        
        {!setNav ? (<HiOutlineMenuAlt4 className={classes.menuContainer} onClick={toggleNav}/>) : 
        (<AiOutlineClose className={classes.menuContainerr} onClick={toggleNav}/>)}
        {/* <button onClick={() => click('yellow')}>Change Color</button> */}
        {/* <div className={classes.menuContainer} onClick={toggleNav}>&#215;</div> */}
        {/* <div className={classes.hamburger} onClick={handleNavToggle}>
        {!navOpen ? (
          <HiOutlineMenuAlt4 className={classes.Icons} />
        ) : (
          <AiOutlineClose className={classes.Icons} />
        )}
      </div> */}
       </header>
        {setNav && <HeaderLinks/> }
        

    </div>
  )
}

export default Header







// import React, { useState } from "react";
// import classes from "./Navbar.module.css";
// import Logo from "../../asset/GraceHandLogo.svg";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const handleNavToggle = () => {
//     setNavOpen(!navOpen);
//   };

//   const handleNavLinkClick = () => {
//     setNavOpen(false);
//   };

//   return (
//     <div className={classes.navbar}>
//       <div className={classes.logo}>
//         <Link to="/">
//           <img src={Logo} alt="/" />
//         </Link>
//       </div>
//       <ul className={classes.navMenu}>
//         <li>
//           <Link to="/" className={classes.navlink} onClick={handleNavLinkClick}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/aboutedu" className={classes.navlink} onClick={handleNavLinkClick}>
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link to="/trainings" className={classes.navlink} onClick={handleNavLinkClick}>
//             Trainings
//           </Link>
//         </li>
//         <li>
//           <Link to="/technology" className={classes.navlink} onClick={handleNavLinkClick}>
//             Technology
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className={classes.navlink} onClick={handleNavLinkClick}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//       <div className={classes.hamburger} onClick={handleNavToggle}>
//         {!navOpen ? (
//           <HiOutlineMenuAlt4 className={classes.Icons} />
//         ) : (
//           <AiOutlineClose className={classes.Icons} />
//         )}
//       </div>
//       <div className={navOpen ? classes.active : classes.mobileMenu}>
//         <ul className={classes.mobileNav}>
//           <li>
//             <Link to="/" className={classes.navlink} onClick={handleNavLinkClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/aboutedu" className={classes.navlink} onClick={handleNavLinkClick}>
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/trainings" className={classes.navlink} onClick={handleNavLinkClick}>
//               Trainings
//             </Link>
//           </li>
//           <li>
//             <Link to="/technology" className={classes.navlink} onClick={handleNavLinkClick}>
//               Technology
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className={classes.navlink} onClick={handleNavLinkClick}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;