import { useState , useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import './All.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar.jsx';
import Landing from './landing.jsx';
import Service from './Service.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'


function App({mode}) {

  useEffect(() => {
    AOS.init();
  }, []);

  const [Theme, settheme] = useState(true)

  return (
    <>
     <Navbar  mode={Theme}  setmode={settheme}/>
     <Landing mode={Theme}/>
     <Service mode={Theme}/>
     <About mode={Theme}/>
     <Contact mode={Theme}/>
     <Footer mode={Theme}/>
    </>
  )
}

export default App
