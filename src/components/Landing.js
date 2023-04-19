import React from 'react'

// Landing Image
import Img from '../image/land1.jpg'

// css
import '../styles/Landing.css'



const Landing = () => {
  return (
    <div className='landing'>
      <div className='landingparent'>
        <div className='landing-text'>
                <h3>Learning to  code can be easy and fun!</h3>
            <div className='words'>
                <h5>Would Give More Stars If I Could</h5>
                <p>The best club to start your coding journey</p> 
                <span>Founded: 10/10/2022</span>    
            </div>

          </div>

          <div className='landing-img'> 
              <img src={Img} alt='logo'/>
          </div>
      </div>
    </div>
  )
}

export default Landing