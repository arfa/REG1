import React from 'react';
import Logo from '../images/1.png'
import Logo1 from '../images/demolition.png'
import Logo2 from '../images/vente-de-produit.png'

const ServiceDetails = () => {
  return (
  <div className='flex flex-col  ' name="SERVICES"> 
  <div className='bg-zinc-900 h-max '>
  
  <div class=" w-full  grid grid-cols-2 gap-4 justify-items-center border-t-4 border-zinc-900 ">
  {/* <div class=" bg-acceuil h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
  <div class="    bg-transparent  md:p-16 md:m-auto flex flex-col  leading-normal">
    <div class="mb-8">
      
      <div class="text-greenlight font-bold md:text-3xl sm:text-2xl text-xl mb-2">1. Démolition</div>
      <p class="text-white md:text-2xl text-xl">Tout type de démolition telque usine, immeuble, hôtel et autres du secteur des BTP
</p>
    </div>
    <div class="flex items-center">
      {/* <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/> */}
     
    </div>
  </div>
 <div className='shadow-zinc-900' >
 <img className='md:h-auto h-64 w-max m-auto opacity-100 ' src={Logo1} alt='aaa' />
 </div>
 

  
</div>
      
  </div>
    <div className='bg-zinc-900  h-max items-center'>
    <div class=" w-full  grid grid-cols-2 gap-4 justify-items-center ">
  {/* <div class=" bg-acceuil h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
    <div className='' >
 <img className='md:h-auto h-64 w-max opacity-1000 ' src={Logo} alt='aaa' />
 </div>
  <div class="  border-y-4 border-green01  bg-transparent  p-4 flex flex-col  leading-normal">
    <div class="mt-8">
      
      <div class="text-white font-bold text-2xl mb-2">
</div>
      <p class="text-white text-xl font-bold">Décharge agrée pour tous types de déchets de construction </p>
    </div>
    <div class="flex items-center">
      {/* <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/> */}
      
    </div>
  </div>
 
 

  
</div>
    </div>
    <div className='bg-zinc-900  border-b-4 border-green01  h-max'>

    <div class=" w-full  grid grid-cols-2 gap-4 justify-items-center items-center ">
  {/* <div class=" bg-acceuil h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
  <div class="    bg-transparent  p-4 flex flex-col  leading-normal">
    <div class="mt-8">
      
      <div class="text-white font-bold text-2xl mb-2"></div>
      <p class="text-white text-xl">Vente de produits de carrière dérivée de déchets de construction au sein de l’économie circulaire </p>
    </div>
    
  </div>
 <div className='flex' >
 <img className='md:h-auto h-64 w-64 md:w-max opacity-100    ' src={Logo2} alt='aaa' />
 </div>
 

  
</div>
    </div>
    
  </div>
    
  )
}

export default ServiceDetails