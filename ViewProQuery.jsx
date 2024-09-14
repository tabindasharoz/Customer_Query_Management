import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import Utopnav from '../components/Utopnav';

const ViewProQuery = () => {

    const {id}= useParams();
    const [penquery, setPenQuery]=useState([]);
    var [count, setCount]= useState(1);
      const getpenquery=async()=>{
          const response = await fetch(`http://localhost:8000/getproquery/${id}`);
          const data= await response.json();
          console.log(data);
          if(data.msg=="Success"){
              console.log(data.result);
              setPenQuery(data.result);
              console.log(penquery);
              
          }
         
      
  
      }
      useEffect(()=>{
          getpenquery();
      },[])
    

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

  <div className='col-md-6 table-responsive mx-auto p-2 rounded-2 my-auto shadow-lg bg-light'>

    <table className='table table-light'>
        <thead>
        <tr><th>
            Sno.
            </th>
            <th>Department</th>
            <th>Subject</th>
            <th>Query</th>
            <th>Status</th>
            </tr>
            </thead>
            <tbody>
             { penquery?.map((e)=>(
                
                <tr>

                <td>{count++}</td>
                <td>{e.department}</td>
                <td>{e.subject}</td>
                <td>{e.description}</td>
                <td>Process</td>
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
  

export default ViewProQuery