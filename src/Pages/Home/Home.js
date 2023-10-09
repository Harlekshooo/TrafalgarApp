import React from 'react'
import Header from '../../components/Header/Header' 
import Hero from "../../components/First/First"
import Services from '../../components/Services/Services'
import Healthcare from '../../components/Healthcare/Healthcare'
import Application from '../../components/Application/Application'
import Testimonials from '../../components/Testimonials/Testimonials'
import Latest from '../../components/Latest/Latest'
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <Services/>
      <Healthcare/>
      <Application/>
      <Testimonials/>
      <Latest/>
      <Footer/>
    </div>
    
    
    
  )
}

export default Home

