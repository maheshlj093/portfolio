import React from 'react'

function Project() {
  return (
<div>
<section id="Project" className="">
  <div className="container">
    <div className='row'>
      <div className='col-md-12 text-center'>
        <h3 className='text-header'>Projects</h3>
        <div className='underline mx-auto'></div>
      </div>
    </div>
    <div className="row mt-5 d-flex justify-content-center">
      <div className="col-lg-4">
        <div className="list-group text-center">
        <a href="https://smartems.in" className="list-group-item list-group-item-action bg-danger text-white">SmartEMS</a>
          <a href="https://www.dilipkpandey.in" className="list-group-item list-group-item-action bg-info text-white">DKP</a>
          <a href="https://karnataka.aamaadmiparty.org" className="list-group-item list-group-item-action bg-warning text-white">AAP Karnataka</a>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default Project
