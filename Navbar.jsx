import React from 'react'
// import logo from '../components/img/karam-logo-01.png'
import logo from '../components/img/logo.png'
import {Link} from 'react-router-dom'






const Navbar = () => {
  return (
    <div class='row bg-dark'>
        <div class='col-md-12'>
      
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  ms-auto w-75">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={'/About'}>About</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/Leadership'}>Leadership Team</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/Leadership'}>Leadership Talk</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/Esg'}>ESG</Link></li>
           
          </ul>
         
        </li>
        

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={'/Personal'}>Personal Protective Equipment</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/Fall'}>Fall Protection Equipment</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/'}>Fixed line segment</Link></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={'/About'}>Authorised Service Centers</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/'}>Training and Consultancy</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/'}>Mobile Demo van</Link></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogues
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={'/About'}>Karam Group Profile</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to={'/'}>Domestic Catalogue</Link></li>
            <li><hr class="dropdown-divider"/></li>
         
            
          </ul>
        </li>

   




        {/* <li class="nav-item">
          <Link class="nav-link active" to={'/About'}>About</Link>
        </li> */}
        <li class="nav-item">
          <a class="nav-link active" href="#">Careers</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact Us</a>
        </li>
       
       

      </ul>
      <Link to={'/adlogin'} className='btn btn-outline-danger text-light mx-3'>Admin login</Link>
<Link to={'/login'} className='btn btn-outline-danger text-light'>Query?</Link>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Navbar