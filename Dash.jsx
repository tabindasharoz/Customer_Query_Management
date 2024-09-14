import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import Utopnav from '../components/Utopnav';
import b3 from '../components/img/b3.jpg'

const Dash = () => {
  

  const {id}= useParams()
  const [firstname, setFirstname]=useState("");
  const [lastname, setLastname]=useState("");
  const [email, setEmail]= useState("");
const getUser =async()=>{
  const response= await fetch(`http://localhost:8000/${id}`);
  
  if (response.ok){
    const data= await response.json()
    // console.log(data);
    setFirstname(data.firstname);
    setLastname(data.lastname);
    setEmail(data.email);
  }

}
useEffect(()=>{
getUser()
},[])

  return (
    <>
    <div className='row vh-7'>
      <div className='col-sm-12  text-light  bg-dark'>
<Utopnav/>
      </div>
      </div>

      <div className='row vh-93'>
        <div className='col-2 h-100 scroll bg-danger'>
          <Sidenav/>


        </div>
        <div className='   col-10 h-100 scroll ' style={{ 
      backgroundImage: `url(${b3})` 
     , backgroundRepeat: 'no-repeat',backgroundSize:"cover" }} >
       
<div className='row h-100'>
  <div className='col-md-6 mx-auto bg-light p-4 rounded-5 my-auto'>
    <h5 className='text-center'>User Details</h5>

    <div className='row my-3'>
      <div className='col-md-6'>FirstName : </div>
      <div className='col-md-6'> {firstname} </div>
    </div>

    <div className='row my-3'>
      <div className='col-md-6'>LastName : </div>
      <div className='col-md-6'>{lastname}</div>
    </div>

    <div className='row my-3'>
      <div className='col-md-6'>Email : </div>
      <div className='col-md-6'>{email}</div>
    </div>

    <div className='row my-3'>
      <div className='col-md-6 mx-auto text-center'><Link to={'/userDash/${id}'} className='btn btn-danger'>Edit</Link></div>
    
    </div>


  </div>
</div>


        </div>
      </div>
   
    
    </>
  )
}

export default Dash