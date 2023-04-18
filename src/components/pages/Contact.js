import React from 'react'
import Slider from '../inc/Slider'
import Form from '../inc/Form'

function Contact() {
  return (
    <div>
      <Slider/>
      <section id="contact" className="bg-light">
  <div className="container">
  <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='text-header'>Contact Us</h3>
              <div className='underline mx-auto'></div>
            </div>
          </div>
    <div className="row mt-5">
      <div className="col-lg-6">
        <h2>Contact Us</h2>
        <p className='mt-4'>Feel free to reach out to us<br/> with any questions, comments,<br/> or concerns.</p>
        <ul className="list-unstyled">
          <li><i className="bi bi-geo-alt"></i>123 Main St., Anytown USA</li>
          <li><i className="bi bi-telephone"></i>(123) 456-7890</li>
          <li><i className="bi bi-envelope"></i>info@example.com</li>
        </ul>
      </div>
      <div className="col-lg-6">
          <Form/>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
