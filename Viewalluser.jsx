import React, { useEffect, useState } from 'react'
import Adsidenav from '../components/Adsidenav'
import Topnav from '../components/Topnav';

const Viewalluser = () => {

  const [user, setUser]=useState([]);
  var [count, setCount]= useState(1);
const getuser= async()=>{
const response = await fetch('http://localhost:8000')
const data=await response.json();
if(data){
  setUser(data);
  
}

}



useEffect(()=>{
  getuser();
},[])

  return (
    <>
    <div className='row vh-7'>
      <div className='col-sm-12  bg-dark text-light'>
<Topnav/>
      </div>
      </div>

      <div className='row vh-93'>
        <div className='col-2 h-100 scroll bg-danger'>
          <Adsidenav/>


        </div>
        <div className='col-10 h-100 scroll bg-success'>
<div className='row h-100'>
 
<div className='col-md-6 table-responsive mx-auto p-2 rounded-2 my-auto shadow-lg bg-light'>

<table className='table table-light'>
    <thead>
    <tr><th>
        Sno.
        </th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
       <th>Action</th>
        </tr>
        </thead>
        <tbody>
         { user?.map((e)=>(
            
            <tr>

            <td>{count++}</td>
            <td>{e.firstname}</td>
            <td>{e.lastname}</td>
            <td>{e.email}</td>
            <td><button className='btn btn-primary'><i className='fa fa-edit'></i></button></td>
            
            </tr>

          ))}

        </tbody>
</table>

</div>


</div>


        </div>
      </div>
   
    
    </>
  )
}

export default Viewalluser