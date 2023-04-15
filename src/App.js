import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Opportunity from './components/Opportunity';
 
const Home=()=>{
return(
  <>
   <div className="  sticky top-0 z-10"><Navbar/>
    
    </div>
   
        <Acceuil/>
       {/* <div className="md:hidden">
       <Services/>
       </div> */}
       <Services/>
       <ServiceDetails/>
       <Carousel/>
       {/* <div className="hidden md:block">
       <Services/>
       </div> */}
       
       <Contact/>
       <Footer/></>
);
}



function App() {
  
  return (
    <Router>
      
  <div className=''>
   
    
      
   
       
        
       
  </div>
  <Routes>
  <Route exact path="/" element={<Home/>} />
        <Route path="/opportunity" element={<Opportunity/>} />
  </Routes>
  </Router>
  );
}

export default App;
