import React from 'react'
import Slider from '../inc/Slider'

function About() {
  return (
    <div>
      <Slider/>
      <section id="about" className="bg-light">
  <div className="container">
  <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='text-header'>About Us</h3>
              <div className='underline mx-auto'></div>
            </div>
          </div>
    <div className="row mt-5">
      <div className="col-lg-4">
        <h2 className='text-center'>Who We Are</h2>
        <p className='font-normal'>At XYZ Company, we pride ourselves on providing top-quality services and solutions to our clients. Our team of experts is committed to delivering innovative solutions that help our clients achieve their business goals.</p>
      </div>
      <div className="col-lg-4">
        <h2 className='text-center'>Our Expertise</h2>
        <p className='font-normal'>Our team of professionals has years of experience in various fields, including marketing, design, development, and project management. We have a deep understanding of the latest technologies and tools, and we're always exploring new ways to improve our processes and services.</p>
      </div>
      <div className="col-lg-4">
        <h2 className='text-center'>Our Commitment</h2>
        <p className='font-normal'>At XYZ Company, we're committed to providing exceptional service to our clients. We believe that building strong relationships with our clients is the key to success, and we work hard to earn their trust and respect. Our team is dedicated to delivering results that exceed expectations and to ensuring that our clients are satisfied with our work.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
