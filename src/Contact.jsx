import React from 'react'

function Contact({mode}) {
  return (
    <>
        <div className="container-fluid  p-0 m-0  contact h-100 w-100  d-flex justify-content-center align-items-center  ">
      <div className={`container-fluid  main-4 d-flex ${!mode?"bg-dark text-light ":"bg-light text-dark border border-3"}`} id='contact'>
        <div className="container  ">
          <div className="row h-100 w-100    ">
             <div className="col-12 col-lg-6 d-flex flex-column justify-content-center ">
               <h2  className='fw-bold    py-4'>My Contacts</h2>
               <p className=' my-2'>Results-driven Frontend Developer with expertise in React and JavaScript. Developed responsive web applications and reducing load times by 60%. Skilled in WebGL and 3D rendering, creating immersive user experiences that increased engagement by 35%.</p>
             <h2 className='fw-bold '>Address</h2>
             <p className=''>No 18, Second Block ,Rajarathinam stadium , pudupet , Chennai 600002</p>
             <h2 className='fw-bold '>phone</h2>
             <p className=''>+91 7708749403</p>
             <h2 className='fw-bold '>E-mail</h2>
             <p className=''>alagarsamy200401@gmail.com</p>
             </div>

             <div className="col-12 col-lg-6 d-flex flex-column justify-content-center   " data-aos="zoom-in" data-aos-duration="2000">
                 <h2 className='fw-bold py-4 pt-4' >Quick Contact Form</h2>
                  {/* <div className="row  ">

                      <input type="text"className={` text-light border border-1 border-light  py-2 my-2 ${mode?"bg-dark text-light":"bg-light text-dark"}`} id="validationDefaultUsername"  placeholder='Your Name'  />
                      <input type="text" placeholder='Your Phone' className='bg-dark text-light border border-1 border-light  py-2 my-2'/>
                      <input type="text" placeholder='Your Address' className='bg-dark text-light border border-1 border-light py-2 my-2'/>
                        <textarea name="" id="" placeholder='Your Message 'className='bg-dark border border-1 border-light text-light   '></textarea>
                  </div>

                 
                  <button className={`py-2 px-4  border-1 my-3  fw-bold ${mode?" btn btn-outline-dark ":"btn btn-outline-light  "} `}>Submit</button> */}

<form class="row g-3  " action="https://api.web3forms.com/submit" method="POST">



    
    <input type="hidden" name="access_key" value="5943cb70-ab2b-4a55-90eb-c44c3efe21df" />
    <input type="text" className={`   border border-1 border-light py-2 my-2 ${!mode?"bg-light text-dark":"bg-dark text-light"}`} id="validationDefaultUsername" placeholder='Your Name' name="name" required />

    <input type="email"  className={`  border border-1 border-light py-2 my-2 ${!mode?"bg-light text-dark":"bg-dark text-light"}`} id="validationDefault03" placeholder='Your E-mail'name="email" required />
    <input type="text"  className={`   border border-1 border-light py-2 my-2 ${!mode?"bg-light text-dark":"bg-dark text-light"}`} id="validationDefaultUsername" placeholder='Your Address' name="address" required />
   
    <textarea  id="validationDefault03" placeholder='Your Message ' className={`  border border-1 border-light py-2 my-2 ${!mode?"bg-light text-dark":"bg-dark text-light"}`} name="message" required ></textarea>
  


 
  <div class="col-12">
    <button className={`py-2 px-4  border-1 my-3  fw-bold ${mode?" btn btn-outline-dark ":"btn btn-outline-light  "} `} type="submit">Submit form</button>
  </div>
</form>


             </div>
          </div>
        </div>
        
      </div>
         
            
    </div>
    </>
  )
}

export default Contact