import React from 'react'
import about from './img/about.jpg'
import about2 from './img/about2.jpg'
import about3 from './img/about3.jpg'
import {Link} from 'react-router-dom'


const Slider = () => {
  return (



    <div className='row bg-dark p-2 text-light '>
        <div className='col-sm-5'> 
         <br/>
         <br/>
         <br/>
         
          <h1>Saving millions of lives globally</h1>
          <br/><br></br>
          <h6>KARAM is a leading global PPE & Fall Protection solutions brand.</h6>
          <br/>
          <Link class="btn btn-danger" to={'/About'} role="button">Learn More</Link>
          
        </div>
        <div className='col-sm-6'> 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    


    <div className="carousel-item active">
      <img src={about} className="d-block w-100" alt="..."/>
      <div className='s bg-danger w-50 position-absolute' >KARAM launches new portable single gas detectors</div>
    </div>
    <div className="carousel-item">
      <img src={about2} className="d-block w-100" alt="..."/>
      <div className='s bg-danger w-50 position-absolute' >More details on news and events</div>
    </div>
    <div className="carousel-item">
      <img src={about3} className="d-block w-100" alt="..."/>
      <div className='s bg-danger w-50 position-absolute' >Intersec 2024, Dubai</div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
             </div>
        <div className='col-sm-1 my-auto '>
            <p className="fa-brands fs-4 fa-facebook border p-3 rounded-circle"></p><br/>
            <p className="fa-brands fs-4  fa-twitter border p-3 rounded-circle"></p><br/>
            <p className="fa-brands fs-4  fa-youtube border p-3 rounded-circle"></p><br/>
            <p className="fa-brands fs-4  fa-instagram border p-3 rounded-circle"></p><br/>
             </div>
    </div>
  )
}

export default Slider