import React from 'react';
import Logo from '../images/1.png'
import Logo1 from '../images/demolition.png'
import Logo2 from '../images/vente-de-produit.png'

const ServiceDetails = () => {
  return (
  <div className='flex flex-col  ' > 
  <div className='bg-zinc-900 h-max  ' name='SERVICE1'>
  
  <div class=" w-full  grid grid-row-2 md:grid-cols-2 gap-4 justify-items-center border-t-4 border-zinc-900 ">
  {/* <div class=" bg-acceuil h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
  <div class="    bg-transparent  p-4 md:m-auto flex flex-col  leading-normal"data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000">
  <div class="mt-8 ">
    <div class="rounded-l-full bg-green01 md:bg-transparent">
              <div class=" flex flex-row items-center space-x-2">
                <div
                  class="px-4 py-2 font-bold text-white rounded-full md:py-1 bg-greenlight text-sm lg:text-xxl"
                >
                  01
                </div>
                <div>
                <h3 class="text-base text-greenlight font-bold md: md:hidden text-sm lg:text-xxl">
                Démolition
                </h3>
                </div>
                <div>
                <h3 class="hidden  text-lg text-greenlight font-bold md:block text-sm lg:text-xxl">
                Démolition
              </h3> 
                </div>
                
                
              </div>
            </div>

            <div>
              {/* <h3 class="hidden mb-4 text-lg text-greenlight font-bold md:block">
              Vente de produits de carrière
              </h3> */}
              <p class="text-white lg:text-xsm my-4">
              Une approche avantageuse pour le secteur des BTP.
C’est un processus incontournable dans le secteur des BTP (Bâtiments et Travaux
Publics) qui englobe une variété de structures telles que des usines, des
immeubles, des hôtels, et bien d'autres. Pour garantir une démolition efficace et
respectueuse de l'environnement, il est essentiel d'adopter une technique
appropriée.

              </p>
            </div>
      
    {/* <div class="text-greenlight font-bold md:text-xsm sm:text-2xl text-xl mb-2">3. Vente de produits de carrière</div>
      <p class="text-white text-xl">Vente de produits de carrière dérivée de déchets de construction au sein de l’économie circulaire </p> */}
    </div>
    <div class="flex items-center">
      {/* <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/> */}
     
    </div>
  </div>
 <div className='shadow-zinc-900' >
 <img className='md:h-auto h-64 w-max m-auto opacity-25 ' src={Logo1} alt='aaa' data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000"   />
 </div>
 

  
</div>
      
  </div>
    <div className='bg-zinc-900  h-max items-center 'name='SERVICE2'>
    <div class=" w-full  grid grid-row-2 md:grid-cols-2 gap-4 justify-items-center ">
  {/* <div class=" bg-acceuil h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
    <div className=' hidden md:block' >
 <img className='md:h-auto h-64 w-max opacity-25 ' src={Logo} alt='aaa' data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000"/>
 </div>
  <div class="  md:border-y-4 md:border-green01  bg-transparent  p-4 flex flex-col  leading-normal "data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000">
  <div class="mt-8 ">
    <div class="rounded-l-full bg-green01 md:bg-transparent">
              <div class=" flex flex-row items-center space-x-2">
                <div
                  class="px-4 py-2 font-bold text-white rounded-full md:py-1 bg-greenlight text-sm lg:text-xxl"
                >
                  02
                </div>
                <h3 class="text-base text-greenlight font-bold md: md:hidden text-sm lg:text-xxl">
                Décharge de déchets
                </h3>
                <h3 class="hidden  text-lg text-greenlight font-bold md:block text-sm lg:text-xxl">
              Décharge de déchets
              </h3>
              </div>
            </div>

            <div>
              {/* <h3 class="hidden mb-4 text-lg text-greenlight font-bold md:block">
              Vente de produits de carrière
              </h3> */}
              <p class="text-white my-4 lg:text-xsm">
              Agréée pour la gestion de tous types de déchets de construction.
Les Décharges de Déchets jouent un rôle essentiel dans la gestion responsable des déchets
de construction.
En tant qu'espace désigné et agréé, elles permettent d'éliminer correctement et efficacement
les déchets générés par les projets de construction.

              </p>
            </div>
      
    {/* <div class="text-greenlight font-bold md:text-xsm sm:text-2xl text-xl mb-2">3. Vente de produits de carrière</div>
      <p class="text-white text-xl">Vente de produits de carrière dérivée de déchets de construction au sein de l’économie circulaire </p> */}
    </div>
    <div class="flex items-center">
      {/* <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/> */}
      
    </div>
    <div className='md:hidden block shadow-zinc-900' >
 <img className='md:h-auto h-64 w-max m-auto opacity-25 ' src={Logo} alt='aaa' data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000"/>
 </div>
  </div>
  
 
 

  
</div>
    </div>
    <div className='bg-zinc-900  border-b-4 border-green01   h-max'name='SERVICE3'>

    <div class=" w-full  grid grid-row-2 md:grid-cols-2 gap-4 justify-items-center items-center ">
  {/* <div class=" bg-acceuil h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
  </div> */}
  <div class="    bg-transparent  p-4   leading-normal "data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000">
    <div class="mt-8 ">
    <div class="rounded-l-full bg-green01 md:bg-transparent" >
              <div class=" flex flex-row items-center space-x-2">
                <div
                  class="px-4 py-2 font-bold text-white rounded-full  md:py-1 bg-greenlight text-sm lg:text-xxl "
                >
                 03
                </div>
                <h3 class="text-base text-greenlight lg:text-xxl font-bold md: md:hidden">
                Vente de produits de carrière
                </h3>
                <h3 class="hidden lg:text-xxl text-lg text-greenlight font-bold md:block">
              Vente de produits de carrière
              </h3>
              </div>
            </div>

            <div>
              {/* <h3 class="hidden mb-4 text-lg text-greenlight font-bold md:block">
              Vente de produits de carrière
              </h3> */}
              <p class="text-white my-4 lg:text-xsm">
              Vente de Produits de Carrière pour une Économie Circulaire Prospère.
La vente de produits de carrière dérivés de déchets de construction est une initiative
innovante au cœur de l'économie circulaire.
              </p>
            </div>
      
    {/* <div class="text-greenlight font-bold md:text-xsm sm:text-2xl text-xl mb-2">3. Vente de produits de carrière</div>
      <p class="text-white text-xl">Vente de produits de carrière dérivée de déchets de construction au sein de l’économie circulaire </p> */}
    </div>
    
  </div>
 <div className='flex' >
 <img className='md:h-auto h-64 w-64 md:w-max opacity-25    ' src={Logo2} alt='aaa' data-aos="new-animation" data-aos-offset= "400"  data-aos-easing="linear"
     data-aos-duration="6000"/>
 </div>
 

  
</div>
    </div>
    
  </div>
    
  )
}

export default ServiceDetails