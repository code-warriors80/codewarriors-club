import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Team.css'
import succes from '../image/Success.png'
import savage from '../image/Savage.jpeg'
import Vanessa from '../image/Vanessa.jpg'
import sadia from '../image/sadia.jpg'
import { BsGithub, BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Team = () => {
  return (
    <section>
               <h3 className='intro'>Our Facilitators</h3>

               <div className='team-container'>
                    <div className='team-parent'>
                    <div className='box team-1'>
                          <div className='box-img'>
                              <img src={sadia} alt=''/>
                            </div>
                            <h2>Sadia Abdulrahman</h2>
                            <h4>Financial Secretary</h4>
                            <div className='socials'>
                              <Link to=''> <BsFacebook /> </Link>
                              <Link to=''><BsInstagram /></Link>
                              <Link to=''><BsTwitter /></Link>
                              <Link to=''><BsWhatsapp /></Link>
                            </div>
                        </div>

                        <div className='box team-2'>
                          <div className='box-img'>
                              <img src={savage} alt=''/>
                            </div>
                            <h2>Muctar Mohammed</h2>
                            <h4>Full-Stack Engineer</h4>
                            <div className='socials'>
                            <Link to=''> <BsFacebook /> </Link>
                              <Link to=''><BsInstagram /></Link>
                              <Link to=''><BsGithub /></Link>
                              <Link to=''><BsWhatsapp /></Link>
                            </div>
                        </div>

                        <div className='box team-3'>
                          <div className='box-img'>
                            <img src={succes} alt=''/>
                          </div>
                          <h2>Sadiq Abdulrahman</h2>
                          <h4>Full-Stack Engineer</h4>
                          <div className='socials'>
                            <Link to=''> <BsFacebook /> </Link>
                            <Link to=''><BsInstagram /></Link>
                            <Link to=''><BsGithub /></Link>
                            <Link to=''><BsWhatsapp /></Link>
                          </div>
                        </div>

                        <div className='box team-4'>
                          <div className='box-img'>
                              <img src={Vanessa} alt=''/>
                            </div>
                            <h2>Vanessa Odidi</h2>
                            <h4>Human Resource</h4>
                            <div className='socials'>
                              <Link to=''> <BsFacebook /> </Link>
                              <Link to=''><BsInstagram /></Link>
                              <Link to=''><BsTwitter /></Link>
                              <Link to=''><BsWhatsapp /></Link>
                            </div>
                        </div>

                        <div className='box team-5'>
                          <div className='box-img'>
                              <img src={succes} alt=''/>
                            </div>
                            <h2>David Tony Ibok</h2>
                            <h4>Graphic Designer</h4>
                            <div className='socials'>
                              <Link to=''> <BsFacebook /> </Link>
                              <Link to=''><BsInstagram /></Link>
                              <Link to=''><BsTwitter /></Link>
                              <Link to=''><BsWhatsapp /></Link>
                            </div>
                        </div>
                    </div>
               </div>
    </section>
  )
}

export default Team