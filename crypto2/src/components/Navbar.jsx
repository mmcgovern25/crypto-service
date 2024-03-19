import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <h1 className='text-gradient font-poppins text-3xl anta-regular'>CRYPTO TRACKERS</h1>
      </div>


    </Link>
  )
}

export default Navbar
