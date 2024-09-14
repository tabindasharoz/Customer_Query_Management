import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidenav = () => {
    const {id}=useParams();
  return (
    <div className='row'>
        <div className='col-sm-12 text-light pt-4'>
            <Link className='nav-link my-3 ps-3' to={'/userDash/${id}'}><i className='fa fa-book'></i>Dashboard</Link>
            <Link className='nav-link my-3 ps-3' to={'/AddQuery/${id}'}><i className='fa fa-question'></i>Add Query</Link>
            <Link className='nav-link my-3 ps-3' to={'/viewPenQuery/${id}'}><i className='fa fa-eye'></i>View pending Query</Link>
            <Link className='nav-link my-3 ps-3' to={'/viewProQuery/${id}'}><i className='fa fa-eye'></i>View processing Query</Link>
            <Link className='nav-link my-3 ps-3' to={'/viewCompQuery/${id}'}><i className='fa fa-eye'></i>View completed Query</Link>
        </div>
    </div>
  )
}

export default Sidenav
