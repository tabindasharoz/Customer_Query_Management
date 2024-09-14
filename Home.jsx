import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import about from '../components/img/about.jpg'
import Slider from '../components/Slider'
import Testimonals from '../components/Testimonals'




const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className='row my-5'>
        <div className='col-md-6 ms-auto'>
          <h4>About us</h4>
          <p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations.

Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions and fixed-line systems. Beyond business, we are a responsible brand that values empowering people, uplifting society and enriching the environment.</p>
        </div>
        <div className='col-sm-4 me-auto my-auto'>
          <img src={about} className='w-100 shadow-lg rounded-pill'/>
        </div>
        </div>
        <Testimonals/>
    <Footer/>
    </>
  )
  
}

export default Home