import React, { useState } from 'react'
import Sidenav from '../components/Sidenav'
import { useParams } from 'react-router-dom'
import Utopnav from '../components/Utopnav';

const AddQuery = () => {
const {id}= useParams();

const [department,setDepartment]= useState("");
const [subject,setSubject]= useState("");
const [description,setDescription]= useState("");
// console.log(department);

const addquery=async(e)=>{
  e.preventDefault()
  const status="pen"
  const query = {"uid":id,"department":department , "subject":subject,"description":description, "status":status}

  const response = await fetch('http://localhost:8000/addquery',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(query)
});
const data=await response.json()
if(data.msg="Query Added"){
  alert(
    "Query Added"
  )
  
}else{
  alert("Something wrong")
}

}

  return (
   <>
    <div className='row vh-7'>
      <div className='col-sm-12  bg-dark text-light'>
<Utopnav/>
      </div>
      </div>

      <div className='row vh-93'>
        <div className='col-2 h-100 scroll bg-danger'>
          <Sidenav/>


        </div>
        <div className='col-10 h-100 scroll bg-success'>
<div className='row h-100'>

  <div className='col-md-6 mx-auto'>
    <form onSubmit={addquery} className='mt-5 p-5 bg-light rounded-5 shadow-lg'>
      <h4 className='text-center mb-4'>Add Query</h4>
      
      Select Department
<select className='form-control' value={department} onChange={(e)=>setDepartment(e.target.value)}>
  <option value="1">Select Department</option>
  <option value={"IT"}>IT</option>
  <option value={"Accounts"}>Accounts</option>
  <option value={"Management"}>Management</option>
  <option value={"Sales"}>Sales</option>

</select>
<input type='hidden' value={id}/>

Enter your Subject 
<input type='text' value={subject} onChange={(e)=>{setSubject(e.target.value)}} className='form-control' placeholder='Enter your Subject'/>

Describe in Detail 
<textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control' rows="5" placeholder='Describe in Details'></textarea>
<br/>
<input type='submit' value={"Add Query"} className='form-control btn btn-primary'/>
    </form>
  </div>
  
</div>


        </div>
      </div>
   </>
  )
}

export default AddQuery