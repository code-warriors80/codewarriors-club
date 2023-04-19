import React from 'react'
import img from '../image/4401280.jpg'
import '../styles/About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='About'>
      <h3 className='intro'>About us</h3>
      <div className='About-Container'>

        <div className='parent'>
            <div className='about-img'>
              <img src={img} alt='' />
            </div>
            <div className='about-txt'>
              <h2>Code Warriors Coding Club</h2>
              <p>
                  The Code Warriors coding club is a fraction  of the code warriors.<br/><br/>

                  This club is targeted at training young school students from age 10 - 17 with tech skills that 
                  if built on could breed young tech enterprenuers and innovative minds thus improving the tech world.<br/><br/>

                  The training covers a range of programming and computer based courses such as Basic Computer Operation, Web Development, Mobile App Development, Testing and Debugging etc. The club also host an annual
                  inter-club hackerton in other to test participants skills so as to initiate better tutoring methods<br/><br/>

                  the club is also focused on building team work, colaboration and friendship between paticipants  
              </p>
              <span className='date'>Founded: 10/10/2022</span> <br/><br/>
                <div className='clubs-details'>
                    <div className='num'>
                      <h6>Subscribers</h6> 
                      <span>0</span>
                    </div>
                    <div className='num'>
                      <h6>Members</h6>
                      <span>0</span>
                    </div>
                    <div className='num'>
                      <h6>Participants</h6>
                      <span>0</span>
                    </div>
                </div>
                  <Link to='/about'>Learn More</Link>
             </div>
        </div>
      </div>
    </section>
  )
}

export default About