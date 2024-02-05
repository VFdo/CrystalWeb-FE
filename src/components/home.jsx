import React from 'react'
import Appointment from '../components/appointment'

function home() {
  return (
    <section id='home' className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3 text '> </p>
                  <h1>The Best Animal Hospital</h1>
                  <h2>For Your Companion</h2>

                  <p className='mb-3'>No one appreciates the very special genius of your conversation <br />as the pet does.</p>
                  <Appointment/>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default home