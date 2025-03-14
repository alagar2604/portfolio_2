import React from 'react'

function About({mode}) {
  return (
    <>
      <div className={`container-fluid main-3   d-flex justify-content-center align-items-center ${!mode?"bg-dark text-light ":"bg-light text-dark border border-3"} `}>
      <div className="container " id='about' >
      <div className="row  " >
            <div className="col-12 col-lg-6  py-5 d-flex flex-column justify-content-center" data-aos="fade-right" data-aos-duration="3000">
              <h5 className=''>expert Front-End-Developer</h5>
               <h1 className='fw-bold  fs-3 py-2'  >About Me</h1>
               <p className=' py-4'>As a passionate freelance front-end developer, I bring a blend of technical expertise and creative vision to craft visually appealing and user-friendly websites. With proficiency in HTML, CSS, JavaScript, and modern frameworks like React and Vue, I excel at translating design concepts into pixel-perfect digital experiences. </p>
               <p className=''> My focus on responsive design, performance optimization, and accessibility ensures seamless interactions across all devices. I thrive in collaborative environments, working closely with clients to understand their needs and deliver high-quality projects on time and within budget.</p>
               <a href="/portfolio_2/Resume.pdf" download="/Resume.pdf">
                <button className={`   rounded-0 download  ${mode?"btn btn-outline-dark":"btn btn-outline-light"}`}>Download Cv</button>
               </a>
                
               {/* <DownloadButton mode={mode}/> */}
            </div>
            
            <div className=" col-12 col-lg-6  " data-aos="fade-left" data-aos-duration="2000">
               <div className="container h-100  d-flex align-items-center justify-content-center">
                 <img src="https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-100 border border-1 border-light p-3 ' alt="" height={"60%"}  />
                 
               </div>
               

            </div>
        </div>
      </div>
        
    </div>
    </>
  )
}

export default About