import React from 'react'
import '../styles/Subscribe.css'

const Subscribe = () => {
  return (
    <section className='subscribe'>
        <h3 className='intro'>Subscribe To Our Club</h3>
        <div style={{backgroundColor: 'whitesmoke'}}>
          <p>Subscribe to code warriors coding club and get updates on club events, tech job openings and club Hackertons </p>
          <div className='subscribe-container'>
            <form className='sub-child'>
              <input type='email' placeholder='Subscribe With Email'/>
              <button>Subscribe</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Subscribe