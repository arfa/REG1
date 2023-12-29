import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import {Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Acceuil from './components/Acceuil';
import Acceuil1 from './components/Acceuil1';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Opportunity from './components/Opportunity';
import AllPosts from "./components/AllPosts";
import Posts from "./components/Posts";
import OnePost from "./components/OnePost";
import ServicePage from "./components/ServicePage";
import Certifications from "./components/Certifications";
 
const Home=()=>{
return(
  <>
  <Helmet>
    <title>Recyclage des déchets en Tunisie - Respect Environment Group</title>
    <meta name='description' content='Découvrez les solutions de recyclage des déchets en Tunisie par Respect Environment Group. Agissons pour l environnement ' />
  </Helmet>
   <div className="  sticky top-0 z-10"><Navbar/>
    
    </div>
   
        <Acceuil1/>
       {/* <div className="md:hidden">
       <Services/>
       </div> */}
       <AllPosts/>
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
    <HelmetProvider>
     <Router>
      
  <div className=''>
   
    
      
   
       
        
       
  </div>
  <Routes>
  <Route exact path="/" element={<Home/>} />
        <Route path="/opportunity" element={<Opportunity/>} />
        <Route element={<Posts/>} path="/posts" />
        <Route element={<OnePost/>} path="/posts/:slug" />
        <Route element={<ServicePage pageName={'Contact'}/>} path="/contact" />
        <Route element={<ServicePage pageName={'Projets'}/>} path="/projets" />
        <Route element={<ServicePage pageName={'ServiceDetails'}/>} path="/service" />
        <Route element={<ServicePage pageName={'Certifications'}/>} path="/certification" />



  </Routes>
  </Router> 
    </HelmetProvider>
    
  );
}

export default App;
