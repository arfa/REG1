import React  from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  

  const sendEmail = (e) => {
     e.preventDefault();

    emailjs.sendForm('service_i8qf2kg', 'template_t9jn69j', e.target, 'EtmZBQhZgDgjQ6VMw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

  return (
    <>
    {/* <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <form action="#" class="space-y-2 ">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-green01 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section> */}

<div class="container my-24 px-6 mx-auto" name="CONTACT">


  <section class="mb-32 text-gray-800">
    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 class="text-3xl font-bold mb-6">Contactez nous</h2>
        <p class="text-gray-500 mb-6">
            REG COMPANY
        </p>
        <p class="text-gray-400 text-xl  mb-2"><span><i class="fa-solid fa-location-dot fa-lg opacity-50"></i></span>  : Ezzahra plage lotissement Afh a
Ben arous ezzahra</p>
        <p class="text-gray-400 text-xl mb-2"><span><i class="fa-solid fa-phone fa-lg opacity-50"></i></span>  : +216 55 123 657 / +216 51 440 222</p>
        <p class="text-gray-400 text-xl mb-2"><span><i class="fa-solid fa-envelope fa-lg opacity-50"></i></span>  : respectenvironnementg@gmail.com </p>
      </div>
      <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form  onSubmit={sendEmail}>
          <div class="form-group mb-6">
            <input type="text" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green01 focus:outline-none" id="exampleInput7"
              placeholder="Name" name="user_name"/>
          </div>
          <div class="form-group mb-6">
            <input type="email" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green01 focus:outline-none" id="exampleInput8"
              placeholder="Email address" name="user_email"/>
          </div>
          <div class="form-group mb-6">
            <textarea class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-green01 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message" name="message"></textarea>
          </div>
          {/* <div class="form-group form-check text-center mb-6">
            <input type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green01 checked:border-green01 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87" checked/>
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
              message</label>
          </div> */}
          <button type="submit" class="
            w-full
            px-6
            py-2.5
            bg-greenlight
            text-white
            font-bold
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-greenlight hover:shadow-lg
            focus:bg-greenlight focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-greenlight active:shadow-lg
            transition
            duration-150
            ease-in-out"  >envoyer</button>
        </form>
      </div>
    </div>
  </section>
 

</div>

    </>
  )
}

export default Contact