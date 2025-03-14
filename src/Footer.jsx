import React from 'react'
import Logo from '../src/assets/logoS.jpg'
import LogoI from '../src/assets/logoI.jpg'

function Footer({mode}) {
  return (
    <>
      <div className={`container-fluid main-5  py-5  ${!mode?"bg-dark text-light ":"bg-light text-dark border border-3"}`}>
        <div className="container d-flex justify-content-center"  data-aos="fade-left" data-aos-duration="2000">
               <img  src={mode?Logo:LogoI} alt="" width={"100px"} className='mx-3 logo' />
             
        </div>
        <div className="container-fluid py-4 ">
           <div className="row ">
            <div className="col d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">

              <a href=""><i class={`fa-brands fa-facebook fs-1 fw-bold mx-2  ${!mode?"text-light":"text-dark"}`}></i></a>
              <a href=""><i class={`fa-brands fa-twitter fs-1 fw-bold mx-2  ${!mode?"text-light":"text-dark"}`}></i></a>
              <a href=""><i class={`fa-brands fa-instagram fs-1 fw-bold mx-2  ${!mode?"text-light":"text-dark"}`}></i></a>
              <a href=""><i class={`fa-brands fa-pinterest fs-1 fw-bold mx-2  ${!mode?"text-light":"text-dark"}`}></i></a>
              <a href=""><i class={`fa-brands fa-linkedin fs-1 fw-bold mx-2  ${!mode?"text-light":"text-dark"}`}></i></a>
              <a href=""><i class={`fa-brands fa-github fs-1 fw-bold mx-2  ${!mode?"text-light":"text-dark"}`}></i></a>
            </div>
            <h4 className='fs-5 text-center  py-3'> - Devolped by Alagarsamy</h4>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer