import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pp from '../components/img/pp.jpg'
import nn from '../components/img/nn.jpg'
import pew from '../components/img/pew.jpg'
import pic from '../components/img/pic.jpg'
import pic2 from '../components/img/pic2.jpg'
import pic3 from '../components/img/pic3.jpg'



const Leadership = () => {
  return (
   <>
   <Navbar/>
   
   <div className='row bg-dark text-light p-5'>
    <br/>
   
<h1>Our Team</h1>
</div>
<br/>

<div className='row mx-auto text-center'>
  <h1>Meet The Founders</h1>
  <p>Meet the brilliant minds that turned a dream into reality.</p>
</div>

<div class="card mb-3 shadow-lg p-8" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pp} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mr. Hemant Sapra</h5>
        <p class="card-text"><small class="text-muted">President, Global Sales & Marketing</small></p>
        <p class="card-text">With an experience of more than 30 years in the field of Safety and Personal Protective Equipment, Mr. Sapra has been a leader with a vision and purpose. His preliminary years in work started with supplying safety equipment to customers, mostly in the Construction sector. With deep understanding of customer needs, and a dedicated approach towards excellence.
Mr. Sapra teamed with Mr. Rajesh Nigam in building KARAM into a one-stop shop for safety solutions, covering head to toe. His personal and marketing skills have enabled built up trust and lasting bonds not only with customers all across the globe, but also with his team m</p>
       
      </div>
    </div>
  </div>
</div>



<div class="card mb-3 p-8 shadow-lg bg-light" >
  <div class="row g-0">
    
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mr. Rajesh Nigam</h5>
        <p class="card-text"><small class="text-muted">President, Technical</small></p>
        <p class="card-text">Mr. Rajesh Nigam joined his family business of trading of chemicals in the year 1992, after graduating from one of the most premium Engineering Institutes of the country- IIT-Kanpur, as a B.Tech in Metallurgical Engineering. He joined hands with Mr. Hemant Sapra in 1994 and has single-handedly handled the product manufacturing and development in KARAM.
Mr. Rajesh Nigam’s technical expertise and his unique ability to apply his engineering skills, has spearheaded the success behind launch of a wide range of highly technical safety products in the Indian as well as the overseas market. His unwavering focus on product quality, leadership abilities, and deep knowledge of the subject have established Mr. Nigam as a prominent figure in this field and he also serves as the Co-Chairman of the PHD Chamber of Commerce Uttar Pradesh chapter.
Mr. Nigam has also received several awards from various industrial associations and groups of the country</p>
       
      </div>
    </div>
    <div class="col-md-4">
      <img src={nn} class="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>


<div className='row text-center bg-seconday'>
  <h1>Leadership Team</h1>
  <p>Learn about the team that guides our success - meet our experienced leadership.</p>
</div><br/>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col shadow-lg text-center ">
    <div class="card">
      <img src={pew} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kavita Nigam</h5>
       
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={pic3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Hanish</h5>
        
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={pic} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Sunita Sapra</h5>
       
      </div>
    </div>
  </div>
  <div class="col shadow-lg text-center">
    <div class="card">
      <img src={pic2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Gopal</h5>
        
      </div>
    </div>
  </div>
</div>
<br/>
   <Footer/>
   </>

   
  )
}

export default Leadership