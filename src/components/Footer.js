import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import cw from '../image/logo.jpeg'

const Footer = () => {
  return (
    <footer className='footer'>
                     <div className='footer-child'>
         <div className='footer-flex'>
            <div className='logo'>
               <img src={cw} alt='codewarriorslogo' />
            </div>
            <div className='ul-grid'>
               <ul>
                  <h5>Product</h5>
                  <li><a href='/'>Web Dev</a></li>
                  <li><a href='/'>App Dev</a></li>
                  <li><a href='/'>Graphic Design</a></li>
               </ul>

               <ul>
                  <h5>Company</h5>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                  <li><Link to='/services'>Reviews</Link></li>
               </ul>

               <ul className='social'>
                  <h5>Follow us</h5>
                  <li><a href='/'><span></span> Facebook</a></li>
                  <li><a href='/'><span></span> Twitter</a></li>
                  <li><a href='/'><span></span> Instagram</a></li>
                  <li><a href='/'><span></span> Github</a></li>
               </ul>
            </div>
         </div>
      </div>
      <span className='copyrights'> <p>CopyRight: @Code warriors</p></span>
    </footer>
  )
}

export default Footer