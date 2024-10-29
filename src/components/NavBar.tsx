import React from 'react'
// import {link}
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <li>
            <Link to="/" className='navbar-brand text-light '>Home</Link>
            </li>
            <li>
            <Link to="/view" className='navbar-brand text-light'>View</Link>
            </li>
            <li>
            <Link to="/addproduct" className='navbar-brand text-light'>Add Product</Link>
            </li>
        </nav>
    </>
  )
}

export default NavBar;