import React from 'react'

// Icon
import { BsList } from "react-icons/bs";

// Image
import Logo from '../image/logo.jpeg'

// Components
import { Link } from 'react-router-dom';

import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
               <div className='header'>
                              <div className='logo'>
                                             <Link to='/' style={{textDecoration: 'none'}}> <img src={Logo} alt='logo'/></Link>
                              </div>

                              <ul id='links'>
                                             <li><Link to='/about'>About</Link></li>
                                             <li><Link to='/contact'>Contact</Link></li>
                                             <li><Link to='/review'>Review</Link></li>
                              </ul>
               </div>

               <div className='links'>
                              <button><BsList /></button>
                              <div className='auth'>
                              <Link>Login</Link>
                              <Link>Register</Link>
                              </div>
               </div>
    </nav>
  )
}

export default Nav