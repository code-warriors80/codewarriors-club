import React from 'react'
import img from '../image/web.jpg'
import app from '../image/app.jpg'
import funder from '../image/funder.jpg'
import '../styles/Service.css'

const Service = () => {
  return (
    <section className='service'>
                       <h3 className='intro'>Our Courses</h3>
                       <div className='container'>
                              <div className='service-parent'>
                                             <div className='service-box box-1'>
                                                            <img src={funder} alt='img' />
                                                            <h4>Computer Maintanance</h4>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum voluptas. Ut ipsum nostrum sunt debitis aperiam mollitia hic animi!</p>
                                             </div>

                                             <div className='service-box box-2'>
                                                            <img src={app} alt='img' />
                                                            <h4>Mobile App Development</h4>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum voluptas. Ut ipsum nostrum sunt debitis aperiam mollitia hic animi!</p>
                                             </div>

                                             <div className='service-box box-3'>
                                                            <img src={img} alt='img' />
                                                            <h4>Web Development</h4>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum voluptas. Ut ipsum nostrum sunt debitis aperiam mollitia hic animi!</p>
                                             </div>

                                             <div className='service-box box-4'>
                                                            <img src={app} alt='img' />
                                                            <h4>Debugging</h4>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum voluptas. Ut ipsum nostrum sunt debitis aperiam mollitia hic animi!</p>
                                             </div>

                                             <div className='service-box box-5'>
                                                            <img src={funder} alt='img' />
                                                            <h4>Computer Maintanance</h4>
                                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum voluptas. Ut ipsum nostrum sunt debitis aperiam mollitia hic animi!</p>
                                             </div>
                              </div>
                       </div>
    </section>
  )
}

export default Service