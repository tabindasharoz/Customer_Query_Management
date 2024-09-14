import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import b from '../components/img/b.jpg'




import b2 from '../components/img/b2.jpg'
import b3 from '../components/img/b3.jpg'
import b5 from '../components/img/b5.jpg'
import b6 from '../components/img/b6.jpg'
import b8 from '../components/img/b8.jpg'
import ppf from '../components/img/ppf.jpg'
import ppf2 from '../components/img/ppf2.jpg'
import ppf3 from '../components/img/ppf3.jpg'
import Personal from './Personal'

const Fall = () => {
  return (
    <>
 <Personal/>
   
    <br/>
        {/* <div className='row p-8 text-left '>
        <Link className="nav-link active px-3 text-danger" to={'/'}>Home</Link>
            <h1>Products</h1>
        </div><br/>
    <hr/> */}
        <div className='row text-center'>
            <h1>Fall Protection Equipment</h1>
            <p>Prevent workplace falls with our comprehensive fall protection solutions</p>
    
        </div>
    
    <hr/>
        <div className="card-group shadow-lg p-3">
      <div className="card p-3">
        <img src={b} className="card-img-top" alt="..."/>
        <div className="card-body bg-danger text-center">
          <h5 className="card-title">Full body harness</h5>
          <p className="card-text">KARAM offers diverse full body harnesses with ergonomic designs and comfort features…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
      <div className="card p-3">
        <img src={b2} className="card-img-top" alt="..."/>
        <div className="card-body p-3 bg-danger text-center">
          <h5 className="card-title">Hooks and Connectors</h5>
          <p className="card-text">KARAM provides specialized Hooks and Karabiners for safety in various hazardous…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
      <div className="card p-3">
        <img src={b3} className="card-img-top" alt="..."/>
        <div className="card-body bg-danger text-center">
          <h5 className="card-title">Lanyards</h5>
          <p className="card-text">KARAM’s lanyards are made of twisted or kernmantle rope or webbing as per requirement…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
    </div>
    
    
    <div className="card-group shadow-lg p-3">
      <div className="card p-3">
        <img src={b5} className="card-img-top" alt="..."/>
        <div className="card-body bg-danger text-center">
          <h5 className="card-title">Anchorages</h5>
          <p className="card-text">KARAM offers anchorage devices made of steel, metal, and webbing that provide secure…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
      <div className="card p-3">
        <img src={b6} className="card-img-top" alt="..."/>
        <div className="card-body p-3 bg-danger text-center">
          <h5 className="card-title">Temporary Anchorage Line Systems</h5>
          <p className="card-text">KARAM's temporary anchorage line systems offer easy installation and portability,…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
      <div className="card p-3">
        <img src={b8} className="card-img-top" alt="..."/>
        <div className="card-body bg-danger text-center">
          <h5 className="card-title">Retractable Fall Arrester Blocks</h5>
          <p className="card-text">Retractable blocks by KARAM solve the problem of accessing high anchorage points with…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
    </div>
    
    <div className="card-group shadow-lg p-3">
      <div className="card p-3">
        <img src={ppf} className="card-img-top" alt="..."/>
        <div className="card-body bg-danger text-center">
          <h5 className="card-title">Protective Workwear</h5>
          <p className="card-text">KARAM's CE-compliant industrial Workwear is designed to keep wearer safe from needless…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
      <div className="card p-3">
        <img src={ppf2} className="card-img-top" alt="..."/>
        <div className="card-body p-3 bg-danger text-center">
          <h5 className="card-title">Hand Protection</h5>
          <p className="card-text">KARAM provides gloves for diverse work conditions, based on style, material, coatings…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
      <div className="card p-3">
        <img src={ppf3} className="card-img-top" alt="..."/>
        <div className="card-body bg-danger text-center">
          <h5 className="card-title">Foot protection</h5>
          <p className="card-text">KARAM's footwear offers style, durability, and complete protection, meeting top EN and…</p>
          <Link to={"/registration"} className='btn btn-dark' >More</Link>
        </div>
      </div>
    </div>
       <Footer/>
        </>
  )
}

export default Fall