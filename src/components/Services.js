import React from 'react'
import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import {Link} from 'react-scroll'
import recycle from '../images/recycle.svg'
import recycle1 from '../images/recycle1.svg'
import recycle2 from '../images/recycle2.svg'
const Services = () => {
  return (<>
  
<div className="border-t-8 border-zinc-900 bg-gradient-to-b from-greenlight to-zinc-900  h-full  md:h-72 md:flex md:flex-row md:justify-between grid  grid-cols-1  justify-items-center items-center md:items-center  md:-z-40  " name="SERVICES" >

    <button className='m-auto  '>
    <Link activeClass="active" className="test1" to="SERVICE1" spy={true} smooth={true} duration={1000} > <img src={recycle} className='w-48 h-48 m-auto'  data-aos="fade-up" data-aos-offset= "400"  data-aos-duration="1000"/></Link>
   
  </button>
  <button className='m-auto'>
  <Link activeClass="active" className="test1" to="SERVICE2" spy={true} smooth={true} duration={1000} > <img src={recycle1} className='w-48 h-48 m-auto'  data-aos="fade-up" data-aos-offset= "400"  data-aos-duration="1000"/></Link>

  </button>
    
  
  <button className=' m-auto'>
  <Link activeClass="active" className="test1" to="SERVICE3" spy={true} smooth={true} duration={1000} > <img src={recycle2} className='w-48 h-48 m-auto'  data-aos="fade-up" data-aos-offset= "400"  data-aos-duration="1000"/></Link>

  </button>
 
</div>
  
  </>
    
  )
}

export default Services