import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import ServiceDetails from './ServiceDetails'
import Contact from './Contact'
import Carousel from './Carousel'
import Certifications from './Certifications'

const ServicePage = ({pageName}) => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-between">
    {(pageName==='Contact')?(<Contact/>):(<></>)}
    {(pageName==='ServiceDetails')?(<ServiceDetails/>):(<></>)}
    {(pageName==='Projets')?(<Carousel/>):(<></>)}
    {(pageName==='Certifications')?(<Certifications/>):(<></>)}

    <Footer/>
    </div>
   
    </>
    
  )
}

export default ServicePage