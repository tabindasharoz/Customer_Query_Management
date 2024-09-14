import React from 'react'
import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'

import enub4 from '../components/img/enub4.jpg'
import enub2 from '../components/img/enub2.jpg'
import enub3 from '../components/img/enub3.jpg'
import en from '../components/img/en.jpg'
import en2 from '../components/img/en2.jpg'
import en3 from '../components/img/en3.jpg'
import ppf from '../components/img/ppf.jpg'
import ppf2 from '../components/img/ppf2.jpg'
import ppf3 from '../components/img/ppf3.jpg'
import Fall from './Fall'




const Personal = () => {
  return (
    <>
    <Navbar/>
   
<br/>
    <div className='row p-8 text-left '>
    <Link className="nav-link active px-3 text-danger" to={'/'}>Home</Link>
        <h1>Products</h1>
    </div><br/>
<hr/>
    <div className='row text-center'>
        <h1>Personal Protective Equipment</h1>
        <p>Protect yourself and your workers with reliable personal protective equipment (PPE)</p>

    </div>

<hr/>
    <div className="card-group shadow-lg p-3">
  <div className="card p-3">
    <img src={enub4} className="card-img-top" alt="..."/>
    <div className="card-body bg-danger text-center">
      <h5 className="card-title">Respiratory protection</h5>
      <p className="card-text">KARAM's disposable face mask meet daily use requirements and are IS, EN and CDSCO…</p>
      <Link to={"/registration"} className='btn btn-dark' >More</Link>
    </div>
  </div>
  <div className="card p-3">
    <img src={enub2} className="card-img-top" alt="..."/>
    <div className="card-body p-3 bg-danger text-center">
      <h5 className="card-title">Gas detection</h5>
      <p className="card-text">KARAM gas detectors give early warnings and safeguard workplaces from hazardous gases…</p>
      <Link to={"/registration"} className='btn btn-dark' >More</Link>
    </div>
  </div>
  <div className="card p-3">
    <img src={enub3} className="card-img-top" alt="..."/>
    <div className="card-body bg-danger text-center">
      <h5 className="card-title">Head Protection</h5>
      <p className="card-text">KARAM's helmets offer comfort, PPE integration, and design for superior head…</p>
      <Link to={"/registration"} className='btn btn-dark' >More</Link>
    </div>
  </div>
</div>


<div className="card-group shadow-lg p-3">
  <div className="card p-3">
    <img src={en} className="card-img-top" alt="..."/>
    <div className="card-body bg-danger text-center">
      <h5 className="card-title">Eye Protection</h5>
      <p className="card-text">KARAM's safety eyewear range provides superior quality, comfort, and protection. CE,…</p>
      <Link to={"/registration"} className='btn btn-dark' >More</Link>
    </div>
  </div>
  <div className="card p-3">
    <img src={en2} className="card-img-top" alt="..."/>
    <div className="card-body p-3 bg-danger text-center">
      <h5 className="card-title">Hearing protection</h5>
      <p className="card-text">KARAM's ear muffs and plugs ensure safety, productivity, and comfort with optimal…</p>
      <Link to={"/registration"} className='btn btn-dark' >More</Link>
    </div>
  </div>
  <div className="card p-3">
    <img src={en3} className="card-img-top" alt="..."/>
    <div className="card-body bg-danger text-center">
      <h5 className="card-title">Face Protection</h5>
      <p className="card-text">KARAM Face and welding shields are designed to provide complete protection during…</p>
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
<Fall/>
   
    </>
  )
}

export default Personal