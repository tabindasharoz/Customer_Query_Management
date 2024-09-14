import React from 'react'
import logo from '../components/img/logo.png'
import {Link} from 'react-router-dom'
import foot from '../components/img/foot.png'

const Footer = () => {
  return (
    <div className='row'>
       
        <div className='row bg-dark p-2 text-light '>
        <div class="col-sm-3" >
  <div class="card-body">
    <h5 class="card-title"><img src={logo}/></h5>
    <br/>
    
    <p class="card-text"><p className="fa-solid fs-6 fa-location-dot  p-1 rounded-circle"></p>D-95, Sector 2, Noida, Uttar Pradesh - 20130.</p>
    <p class="card-text"><p className="fa-regular fs-6 fa-envelope  p-1 rounded-circle"></p> <Link href="#" class="card-link  text-light text-decoration-none">Karam@karam.in</Link></p>
    <p class="card-text"><p className="fa-solid fs-6 fa-mobile  p-1 rounded-circle"></p> <Link href="#" class="card-link text-light text-decoration-none">1800-103-7085</Link></p>
  
   
  </div>
</div>


<div class="col-sm-3" >
  <div class="card-body">
  <br/><br/><br/>
  <Link href="#" class="card-link text-light text-decoration-none">Press Coverage</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">FAQs</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">Blogs</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">News Letter</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">News & Events</Link><br/>
  </div>
</div>
<div class="col-sm-3" >
  <div class="card-body">
    <br/><br/><br/>
    <Link href="#" class="card-link text-light text-decoration-none">Corporate Affairs</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">Product Warranty and Disclaimer</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">EU Declaration Form</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">IMS Policy</Link><br/>
    <Link href="#" class="card-link text-light text-decoration-none">Quality Policy</Link><br/>
  </div>




</div>

<div class="col-sm-3" >
  <div class="card-body">
    <br/><br/><br/>
    <h5 class="card-title"><img src={foot}/></h5>
    </div></div>

           
        </div>
    </div>
  )
}

export default Footer