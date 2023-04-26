import React, { useState } from "react";
import {Link  as Link1} from 'react-router-dom';
import { Transition } from "@headlessui/react";
import Logo from '../images/logo-vert.svg';
import {Link} from 'react-scroll';
import Opportunity from './Opportunity';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    
      <nav className="   md:flex  grid grid-cols-2  md:flex-row  items-center justify-between   bg-white">

      <div className=" flex  ml-4  ">
                <img
                  className="w-20 h-16  "
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              
        <div className="max-w-7xl flex justify-end md:mx-auto  px-4 sm:px-6  lg:px-8">
       
          <div className="flex items-center   justify-between h-16    ">
         
            <div className="flex items-center  ">
           
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <a
                    href="#"
                    className=" text-gray-300 hover:bg-greenlight font-bold hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    <Link activeClass="active" className="test1" to="APROPOS" spy={true} smooth={true} duration={1000} >A PROPOS</Link>
                  </a>
                  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-greenlight font-bold hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    <Link activeClass="active" className="test1" to="SERVICES" spy={true} smooth={true} duration={1000} >SERVICES</Link>
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-greenlight font-bold hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    <Link activeClass="active" className="test1" to="PROJETS" spy={true} smooth={true} duration={1000} >PROJETS</Link>
                  </a>

                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-greenlight font-bold hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    <Link activeClass="active" className="test1" to="REFERENCE" spy={true} smooth={true} duration={1000} >REFERENCE</Link>
                  </a> */}

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-greenlight font-bold hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    <Link activeClass="active" className="test1" to="CONTACT" spy={true} smooth={true} duration={1000} >CONTACT</Link>
                  </a>
                  <a
                    href="#"
                    className="text-greenlight hover:bg-greenlight font-bold hover:text-white px-3 py-2 rounded-sm text-base font-semibold border-2 uppercase border-greenlight "
                  >
                    <Link1 activeClass="active"  to="/opportunity"  >opportunités</Link1>
                  </a>
                </div>
                
              </div>
            </div>
            <div className=" flex justify-end  md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center  p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="green"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="green"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="col-span-2"
        >
          {(ref) => (
            <div className="md:hidden    " id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3  space-y-1 sm:px-3 ">
                
                   <Link                   className="  text-gray-300 hover:bg-greenlight text-center hover:text-white block px-3 py-2 rounded-md text-base font-semibold justify-self-center"
 activeClass="active" to="APROPOS" spy={true} smooth={true} duration={1000} >ACCEUIL</Link>
               

                
                  <Link                   className="text-gray-300 hover:bg-greenlight text-center hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
 activeClass="active"  to="SERVICES" spy={true} smooth={true} duration={1000} >SERVICES</Link>
                

                
                  <Link                   className="text-gray-300 hover:bg-greenlight text-center hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
 activeClass="active" to="PROJETS" spy={true} smooth={true} duration={1000} >PROJETS</Link>
                

               

               
                 <Link                  className =" text-gray-300 hover:bg-greenlight text-center hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
 activeClass="active"  to="CONTACT" spy={true} smooth={true} duration={1000} >CONTACT</Link>
                
                
                    <Link1                     className="text-greenlight hover:bg-greenlight flex justify-center  font-bold hover:text-white px-3 py-2 rounded-sm text-base font-semibold border-2 uppercase border-greenlight "
 activeClass="active"  to="/opportunity"  >opportunités</Link1>
                  
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          {/* <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        {/* </div>
         </main> */} 
    </div>
  );
}

export default Navbar;
