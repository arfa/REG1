import React, { useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  
  return (
  <div className=''>
    <div className="  sticky top-0 z-10"><Navbar/></div>
   
    
       <Acceuil/>
       <Services/>
       <ServiceDetails/>
       <Carousel/>
       <Contact/>
       <Footer/>
   
       
        
    
  </div>
    
  );
}

export default App;
