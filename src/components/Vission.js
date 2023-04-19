import React from 'react'
import miss from '../image/5907681.jpg'
import '../styles/Mission.css'

const Vission = () => {
  return (
<section>
      {/* <h3 className='intro'>Our Vission</h3> */}
      <div className='mission'>
           <div className='mission-container vission'>
                  <div className='mission-img'>
                              <img src={miss} alt='mission' />             
                  </div>


                  <div className='mission-text'>
                  <h2>Our Vision</h2>
                              <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati similique ducimus! Dolore, adipisci eveniet necessitatibus ea velit molestiae architecto.
                              </p>
                  </div>

            </div>
      </div>
</section>
  )
}

export default Vission