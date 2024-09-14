import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import test2 from '../components/img/test2.jpg'
import C from '../components/img/C.jpg'
import Ca from '../components/img/Ca.jpg'
import Cap from '../components/img/Cap.jpg'




import ew from '../components/img/ew.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <Navbar/>
   
    <div className='row my-5'>
        <div className='col-md-5 mx-auto my-auto '>
        <h1>About us</h1>
        <p className='text-justify'>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and exporting our safety solutions to over 100 nations. Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), fall protection solutions and fixed-line systems. We are also a CRISIL A/Stable/CRISIL A1 rated company which reflects the robust market position of the entire KARAM Group</p>
        <Link className="btn btn-primary" href="#" role="button">View More</Link>
    </div>

    <div className='col-md-5 mx-auto'>
        <img src={ew} className='w-100'/>

    </div>


    </div>
    

    <div className='row mx-auto'>
       
<div className='row bg-dark p-4 text-light'>




 <div className="col-sm-3 " >
<div className="card-body "> 
<div className='col-md-120 mx-auto '>
<div className="card">
  <div className="card-header bg-danger">
    Mission
  </div>
  <div className="card-body bg-light text-dark">
   
    <p className="card-text">KARAM is deeply committed to protecting the lives of millions of workers working in the Industrial Environment all across the globe by manufacturing and providing them with supreme quality of Personal Protective Equipment. 

</p>
   
  </div>
</div>
    </div><br/>
</div>
</div>











<div className="col-sm-6" >
<div className="card-body">

<div className='col-md-9 mx-auto my-auto'>
      
<div className="card text-center">
  <div className="card-header bg-danger">
    More about us...
  </div>
  <div className="card-body bg-dark">
    <h5 className="card-title">Innovation</h5>
    <p className="card-text">Safety</p>
    <a href="/About" className="btn btn-danger">More</a>
  </div>
 
</div>

    </div>
</div>
</div>

  




<div className="col-sm-3 " >
<div className="card-body "> 
<div className='col-md-120 mx-auto '>
<div className="card">
  <div className="card-header bg-danger">
    Vision
  </div>
  <div className="card-body bg-light text-dark">
   
    <p className="card-text">We shall provide the entire range of Fall Protection Equipment to the Global market through sustained efforts in R&D, manufacturing under cost effective, safe & systematic processes. all across the globe by manufacturing.

</p>
   
  </div>
</div>
    </div><br/>
</div>
</div>
</div>
</div>


<div className='row my-5 '>



<ul className="nav justify-content-center">
 
  <h2>Manufacturing Units</h2>
  
</ul>
<ul className="nav justify-content-center">
 
 <p>Experience the excellence of our manufacturing units responsible for crafting quality products</p>
 
</ul><br/>
<ul className='nav nav-tabs'>
  <li className='col-sm-4 text-center btn btn-danger'>
    <a  data-toggle="tab" >Lucknow</a>
  
    <img src={C} className='w-100 '/>
    
  </li>
  <li className='col-sm-4 text-center btn btn-danger'>
    <a data-toggle="tab"  aria-expanded="true">Sitarganj</a>
    <img src={Ca} className='w-100'/>
  </li>
  <li className='col-sm-4 text-center btn btn-danger'>
    <a data-toggle="tab" >Sandila</a>
    <img src={Cap} className='w-100'/>
  </li>

</ul>



  </div>

 




     
           
                    
          
           
                    
              
                         
                   
   
      
    
   
   






    <Footer/>
    </>
  )
}

export default About