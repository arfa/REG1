import React from 'react'
import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import recycle from '../images/recycle.svg'
import recycle1 from '../images/recycle1.svg'
import recycle2 from '../images/recycle2.svg'
const Services = () => {
  return (<>
  
<div className="border-t-8 border-zinc-900 bg-gradient-to-b from-greenlight to-zinc-900  h-full  md:h-72 md:flex md:flex-row md:justify-center grid  grid-cols-1  justify-items-center md:items-center md:space-x-32 md:-z-40  " >

    <div className='  '>
    <img src={recycle} className='w-64 h-64'  data-aos="fade-right"  data-aos-duration="1000"/>
  </div>
  
    <img src={recycle1} className='w-64 h-64 ' data-aos="fade-right"  data-aos-duration="2000"/>
  
  <div className=' '>
    <img src={recycle2} className='w-64 h-64'  data-aos="fade-right"  data-aos-duration="3000"/>
  </div>
 
</div>
  
  </>
    
  )
}

export default Services