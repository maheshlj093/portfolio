import React from 'react'
import Photo from '../images/photo.svg'

function Hero() {
  return (
    <div>
        <header class="text-black text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src={Photo} alt="..." />
                <h1 class="masthead-heading text-uppercase mb-0">Mahesh<span>Jadhav</span> </h1>
                <p class="masthead-subheading font-weight-light mb-0"><span>software</span> Engineer</p>
            </div>
        </header>
    </div>
  )
}

export default Hero
