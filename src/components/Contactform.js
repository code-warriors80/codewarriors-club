import React from 'react'
import { BsGithub, BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Contactform = () => {
  return (
               <div className='form-container'>
               <h2>Send Message</h2>
               <div className='contact-form'>
                 <form>
                        <div className='inputs'>
                             <input type='text'  placeholder='Your Name'/>
                             <input type='email'  placeholder='Enter Email'/>
                        </div>
                        <div className='textarea'>
                           <textarea cols='5' rows='5'  placeholder='Type Your Message'></textarea>
                        </div>
                        <div className='all'>
                        <button>Send Message</button>
                        <div>
                          <Link><BsFacebook /></Link>
                          <Link><BsInstagram /></Link>
                          <Link><BsTwitter /></Link>
                          <Link><BsWhatsapp /></Link>
                          <Link><BsGithub /></Link>
                        </div>
                        </div>
                 </form>
             </div>
             </div>
  )
}

export default Contactform