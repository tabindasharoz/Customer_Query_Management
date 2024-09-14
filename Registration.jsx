import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom';



const Registration = () => {

    const navigate= useNavigate();

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const regcode= async (e)=>{
        e.preventDefault();
        const user={firstname,lastname,email,password};
        const response= await fetch('http://localhost:8000/',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
      });
      const result = await response.json();
  
       if(result.msg=="Success"){
        alert("Registration success");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        navigate('/login');
  
       }else{
        alert("failed")
       }
    }

  return (
   <>
   <Navbar/>
<div className='row'>
    <div className="col-md-6 mx-auto ">
    <form onSubmit={regcode} className='my-5 p-5 shadow-lg rounded-5'>
        <h4 className='mb-3'><u className='text-danger'>Registration</u> Form</h4>
            enter your First name:
            <input className='form-control' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} type='text' name='firstname'/>
<br/>
            enter your Last name:
            <input className='form-control' value={lastname} onChange={(e)=>{setLastname(e.target.value)}} type='text' name='lastname'/>
            <br/>
            enter your email:
            <input className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' name='email'/>
            <br/>
            enter your Password:
            <input className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}} type='number' name='password'/>
            <br/>
            <button className=' mb-3 form-control btn btn-primary' type='submit'>Submit</button>

            <Link to={"/Login"} >Already Have Account?</Link>
            </form>
    </div>
</div>

   <Footer/>
   </>
  )
}

export default Registration