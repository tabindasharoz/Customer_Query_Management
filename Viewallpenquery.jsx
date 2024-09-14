import React, { useEffect, useState } from 'react'
import Adsidenav from '../components/Adsidenav'
import Topnav from '../components/Topnav';


const Viewallpenquery = () => {
  const [penquery, setPenQuery]=useState([]);
  var [count, setCount]= useState(1);
const getpenquery= async()=>{
const response = await fetch('http://localhost:8000/ad/allpenquery')
const data=await response.json();
if(data.msg=="Success"){
  setPenQuery(data.q);
  
}

}

const process=async(id)=>{
const status={status:"pro"}
  const response= await fetch (`http://localhost:8000/status/${id}`,
    {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(status)
    });
  
  const data= await response.json();
  if(data.msg=="Success"){
    alert("Query on processing");
    getpenquery()

  }
else{
  alert("Error");
}
}

useEffect(()=>{
  getpenquery();
},[])

  return (
    <>
    <div className='row vh-7'>
      <div className='col-sm-12  bg-dark text-light'>
        <Topnav/>
--      </div>
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
        <th>Department</th>
        <th>Subject</th>
        <th>Query</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
         { penquery?.map((e)=>(
            
            <tr>

            <td>{count++}</td>
            <td>{e.department}</td>
            <td>{e.subject}</td>
            <td>{e.description}</td>
            <td><button onClick={()=>{ process(e._id);}} className='btn btn-primary'>Process</button></td>
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

export default Viewallpenquery