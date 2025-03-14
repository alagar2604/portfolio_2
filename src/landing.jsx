import React from 'react'
import OG from './assets/OG.png'
import BG from './assets/BG.png'

function landing({mode}) {
  return (
    <>
    <div className={`container-fluid landing   ${!mode?"bg-dark text-light ":"bg-light text-dark"}`}>
        <div className="row h-100">
              <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <p class="line-1 anim-typewriter fw-bolder fs-3 "> I AM ALAGARSAMY</p>
                

                <h1 className='fs-4 ' data-aos="fade-right" data-aos-duration="2000">FRONT-END DEVELOPER</h1>
                
                <a className={`${!mode?"btn btn-outline-light ":"btn btn-outline-dark "}`} href='#contact' data-aos="" data-aos-duration="1000">CONTACT ME</a>   
              </div>
              <div className="col-12 col-md-6 ">
                       <img src={mode?OG:BG} className='w-100' alt="" />
              </div>
        </div>
    </div>
    </>
  )
}

export default landing