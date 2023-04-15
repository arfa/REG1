import React from 'react';

import Logo from '../images/1.png';
import Logo1 from '../images/vente-de-produit.jpg';
import Logo2 from '../images/demolition.png'
const Carousel = () => {
  return (
    
<div id="carouselExampleCaptions" name='PROJETS' className="carousel slide carousel-fade relative " data-bs-ride="carousel">
  <div
    className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
  >
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active  flex  relative float-left w-full">
    <div className="carousel-caption absolute md:top-8 rounded-sm flex items-center  text-center md:h-16 h-6  bg-greenlight">
        <p className="text-sm md:text-xsm text-white mx-auto">Projet Référence #1 </p>
        <p></p>
      </div>
      <img className='w-full block ' src={Logo} />
     
    </div>
    <div className="carousel-item   flex  relative float-left w-full">
    <div className=" carousel-caption absolute md:top-8 rounded-sm flex items-center  text-center md:h-16 h-6  bg-greenlight">
        <p className="text-sm md:text-xsm text-white mx-auto">Projet Référence #2 </p>
        <p></p>
      </div>
      <img className='w-full block ' src={Logo1} />
     
    </div>
    <div className="carousel-item   flex  relative float-left w-full">
    <div className="carousel-caption absolute md:top-8 rounded-sm flex items-center  text-center md:h-16 h-6  bg-greenlight">
        <p className="text-sm md:text-xsm text-white mx-auto">Projet Référence #3 </p>
        <p></p>
      </div>
      <img className='w-full block ' src={Logo2} />
     
    </div>
    
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span
      className="carousel-control-prev-icon inline-block bg-no-repeat bg-greenlight rounded-full w-8 h-8 md:w-12 md:h-12"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span
      className="carousel-control-next-icon inline-block w-8 h-8 md:w-12 md:h-12 p-2 md:p-4 bg-no-repeat bg-greenlight rounded-full"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
    
  )
}

export default Carousel