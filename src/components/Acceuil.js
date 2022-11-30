import React from 'react'
import { Transition } from "@headlessui/react";

const Acceuil = () => {
 
  return (
    
    <div className='bg-acceuil  bg-cover bg-center bg-no-repeat h-screen flex justify-end     ' name='APROPOS' >
        <div className=" md:p-8 p-4  bg-greenlight   md:w-1/3 h-1/2 sm:w-1/2 w-9/12 space-y-1  rounded-lg md:space-y-2 xl:space-y-4 mt-28 mr-20 drop-shadow-2xl   "  data-aos="fade-right"  data-aos-duration="3000" >
            <p className="  font-bold text-left text-white text-sm  xl:text-4xl xl:ml-2 leading-normal xl:leading-relaxed xl:mt-12 md:text-xl    "  >
            Leader de la{' '}<span className='font-bold text-green01 uppercase'>démolition</span>  <br/>
            et {' '}<span className='font-bold text-green01 uppercase'>recyclage</span> des déchets de BTP 
            </p>
            <p className="xl:text-xl md:text-base md:m-1  text-sm text-white m-2 text-left   xl:m-4">
            notre entreprise respect environnement groupe société spécialisée dans le recyclage des déchets de bâtiment grâce à notre expérience dans le secteur au niveau international: Italy,France,Lebanon,<br/>l’Afrique et moyen-orient 

            </p>
        </div>
    </div>
  )
}

export default Acceuil