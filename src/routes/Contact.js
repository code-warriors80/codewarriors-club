import React from 'react'
import '../styles/Contact.css'
import Contactform from '../components/Contactform'
import Contactaddress from '../components/Contactaddress'

const Contact = () => {
  return (
    <section className='contact'>
               <div className='contact-container'>
                  <div className='contact-parent'>
                     <Contactaddress/>
                     <Contactform/>                    
                  </div>
               </div>
    </section>
  )
}

export default Contact