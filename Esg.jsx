import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import k2 from '../components/img/k2.jpg'
import k3 from '../components/img/k3.jpg'
import k from '../components/img/k.jpg'
import k4 from '../components/img/k4.jpg'


const Esg = () => {
  return (
  <>
   <Navbar/>
<br/><br/>
   <div className='row p-8 text-left '>
   {/* <li class="nav-item"> */}
          <Link className="nav-link active px-3 text-danger" to={'/'}>Home</Link>

        {/* </li> */}
    <h1>Environmental Social & Governance</h1>
   </div>
   <br/><br/>
<hr/>

   <div className='row text-center '>
    <h1>KARAM with ESG</h1><br/>
    <p>KARAM was founded with the ideal of saving lives. While we are setting the global footprint for a safer future, the need towards establishing ourselves as a responsible brand has become equally significant.

We envision creating an everlasting impact on the well-being of our planet and our society through our ESG (Environmental Social and Governance) initiatives.

Our environmental pillar works towards managing pollution, waste and energy consumption issues.

KARAM with ESG
Our social pillar (through our CSR wing- Koshish) focuses on providing primary health-care, all round education, skill development and creating more employment opportunities for the deprived sections of the society.

Our governance pillar is multi-dimensional and is focused towards our internal teams promoting equality, strengthening social-professional cohesion and multiculturism. Effective people governance strengthens corporate governance.

We believe that we, as a business not only have the responsibility towards the society and the environment in which we operate, but are also accountable for our actions towards the generations to follow. </p>
    
   </div>



   <div className='row text-center bg-seconday'>
  <h1>Leadership Team</h1>
  <p>Learn about the team that guides our success - meet our experienced leadership.</p>
</div><br/>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col shadow-lg text-center ">
    <div class="card">
      <img src={k4} class="card-img-top" alt="..."/>
      <div class="card-body">
      
       
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={k} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={k2} class="card-img-top" alt="..."/>
      <div class="card-body">
       
       
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={k3} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        
      </div>
    </div>
  </div>
</div>
<br/>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col shadow-lg text-center ">
    <div class="card">
      <img src={k4} class="card-img-top" alt="..."/>
      <div class="card-body">
      
       
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={k} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={k2} class="card-img-top" alt="..."/>
      <div class="card-body">
       
       
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={k3} class="card-img-top" alt="..."/>
      <div class="card-body">
        
        
      </div>
    </div>
  </div>
</div>


   <Footer/>
  </>
  )
}

export default Esg