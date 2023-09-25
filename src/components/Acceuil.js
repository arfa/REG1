import React from "react";
import { Transition } from "@headlessui/react";

const Acceuil = () => {
  return (
    <div
      className="bg-acceuil  bg-cover bg-center bg-no-repeat h-screen flex justify-end     "
      name="APROPOS"
    >
      <div
        className=" md:px-8 px-2  bg-greenlight   md:w-1/3 h-1/2 sm:w-1/2 w-9/12 space-y-2 rounded-lg md:space-y-4 xl:space-y-4 mt-28 mr-20 drop-shadow-2xl   "
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        
        <p className="xl:text-xsm md:text-sm  lg:text-xl  text-base text-white  text-left mt-2    xl:m-2">
         
          Respect Environment Group se positionne fièrement comme le <span className="font-bold text-green01 ">leader</span> incontesté
de la <span className="font-bold text-green01 uppercase">démolition</span> et du <span className="font-bold text-green01 ">
RECYCLAGE des déchets de BTP.
          </span> <br/>
          <br className="hidden md:block"/>
Notre société s'est spécialisée dans la gestion écologique et efficace des déchets
de construction, consolidant une solide réputation au niveau international.<br/>
<br className="hidden md:block"/>
<span className="">Nous opérons avec succès en Italie, en France, au Liban, en Afrique et au
Moyen-Orient.</span>

        </p>
      </div>
    </div>
  );
};

export default Acceuil;
