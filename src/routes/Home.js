import React from 'react'
import Landing from '../components/Landing'
import Learning from '../components/Learning'
import Subscribe from '../components/Subscribe'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Service from '../components/Service'

const Home = () => {
  return (
    <div className='home'>
        <Landing />
        <Learning />
        <Service />
        <About />
        <Subscribe />
        <Reviews />
    </div>
  )
}

export default Home