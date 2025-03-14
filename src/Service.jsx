import React from 'react'
import Card from './Card'

function Service({mode}) {
  return (
    <>
      <div className={`container-fluid main-2 ${!mode?"bg-dark text-light ":"bg-light text-dark"} `} >
            <div className="container-fluid py-5"  data-aos="fade-down">
                   <h4 className='text-center' >What i do</h4>
                   <h2 className=' fw-bold fs-1 text-center'>My service</h2>
           </div>
            <div className="container-fluid  p-3 " id='service' >
                <div className="row g-4">
                    <Card Name="card1"  Theme={mode}/>
                    <Card Name="card2"  Theme={mode}/>
                    <Card Name="card3" Theme={mode}/>
                    <Card Name="card4" Theme={mode}/>
                    <Card Name="card5" Theme={mode}/>
                    <Card Name="card6" Theme={mode}/>
                </div>
    </div>
          
    </div>

    </>
  )
}

export default Service