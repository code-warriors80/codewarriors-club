import React from 'react'
import miss from '../image/19197641.jpg'
import '../styles/Mission.css'

const Mission = () => {
  return (
<section className='ourMission'>
      {/* <h3 className='intro'>Our Mission</h3> */}
      <div className='mission'>
               <div className='mission-container'>

                              <div className='mission-text'>
                                              <h2>Our Mission</h2>
                                             <p>
                                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                                             </p>
                              </div>
                              <div className='mission-img'>
                                             <img src={miss} alt='mission' />             
                              </div>

               </div>
        </div>
    </section>
  )
}

export default Mission