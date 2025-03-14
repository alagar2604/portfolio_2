import React from 'react'

function Card({Name,Theme}) {
  return (
    <>
     <div className="col-12 col-md-6 col-lg-4 ">
              <div className={`${Name} container fluid fs-1 text-light `} data-aos-anchor-placement="top-center"  data-aos="zoom-in" data-aos-duration="1000">
                   
              </div>
    </div>
    </>
  )
}

export default Card