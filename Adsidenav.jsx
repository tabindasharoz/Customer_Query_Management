import React from 'react'
import { Link } from 'react-router-dom'

const Adsidenav = () => {
  return (
    <div className='row'>
    <div className='col-sm-12 text-light pt-4'>
        <Link className='nav-link my-3 ps-3' to={'/addash'}><i className='fa fa-book'></i>Dashboard</Link>
        <Link className='nav-link my-3 ps-3' to={'/viewalluser'}><i className='fa fa-user'></i>View All Users</Link>
        <Link className='nav-link my-3 ps-3' to={'/viewallpenquery'}><i className='fa fa-eye'></i>View pending Query</Link>
        <Link className='nav-link my-3 ps-3' to={'/viewallproquery'}><i className='fa fa-user'></i>View Proccessing Query</Link>
        <Link className='nav-link my-3 ps-3' to={'/viewallcompquery'}><i className='fa fa-eye'></i>View completed Query</Link>
    </div>
</div>
  )
}

export default Adsidenav