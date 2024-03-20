import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
      <div className="absolute z-[3] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full blue__gradient" />
        <h1 className='text-gradient font-poppins text-3xl anta-regular'>CRYPTO TRACKERS</h1>
      </div>


    </Link>
  )
}

export default Navbar
