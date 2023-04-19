import React from 'react'
import '../styles/Review.css'
import img from '../image/cw.jpg'

const Reviews = () => {
  return (
    <section className='reviews'>
        <h3 className='intro'>Our Reviews</h3>
        <div className='review-container'>
          <div className='sponsors'>
            <div style={{}} className='sponsors-header'>
              <div className='header-cover'>
                <h2>COMING SOON</h2>
              </div>
            </div>
            <div className='sponsors-logo'>
              <div className='main'>
              <img src={img} alt='' />
              </div>
            </div>
          </div>
          <div className='review-text'>
              <div>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vitae reprehenderit a vel illo optio est et consequatur. Minus nobis tempora necessitatibus porro at, nulla nihil assumenda possimus nostrum alias.
                </p>
              </div>
              <div className='reviewer-details'>
                <img src={img} alt='reviewerimage' />
                <div >
                  <h5>Reviwer Name</h5>
                  <span>Reviewer Age</span>
                </div>
              </div>
          </div>
       </div>
    </section>
  )
}

export default Reviews