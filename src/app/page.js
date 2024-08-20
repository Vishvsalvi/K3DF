"use client"
// import "./globals.css";

import { useEffect, useState } from "react";
export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <>

    {/* <!-- FAILURE ALERT --> */}
    <div
    className="flex items-center justify-between p-4 text-red-700 border rounded border-red-900/10 hidden bg-red-50 z-40 sticky top-0"
    role="alert" id="failure" 
    >
    <strong className="text-sm font-medium "> Message wasn't sent! Try again </strong>
    
    <button className="opacity-90" type="button" id="failure_close">
      <span className="sr-only"> Close </span>
    
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    </div>
    {/* <!-- SUCCESS ALERT --> */}
    <div
  className="flex items-center justify-between p-4 text-green-700 border rounded border-green-900/10 bg-green-50 hidden z-20 sticky top-0" 
  role="alert" id="success"
  >
  <strong className="text-sm font-medium"> Message has been sent! </strong>
  
  <button className="opacity-90" type="button" id="success_close">
    <span className="sr-only"> Close </span>
  
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  </div>
  
    <div className="font-sans relative bg-[#030406] bg-no-repeat overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative z-10 pb-8 bg-[#030406] bg-no-repeat sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <div/>
            
          <div id="home" className="relative pt-6 px-4 sm:px-6 lg:px-8 snap-center">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">K3DF</span>
                <img alt="K3DF" className="h-14 w-14 sm:h-14" src="\Images\Logo.png" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="hamburger"
                  className="bg-[#030406] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
            <a href="#home" className="font-medium text-white hover:text-gray-300">Home</a>
            <a href="#product" className="font-medium text-white hover:text-gray-300">Product</a>
            <a href="#services" className="font-medium text-white hover:text-gray-300">Services</a>
            <a href="#contact" className="font-medium text-white hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </div>

      {/* <!-- MOBILE NAVBAR --> */}
      <div
        id="drop_down"
        className={`transition-all ease-in-out absolute z-10 top-0 inset-x-0 p-2 transform origin-top-right md:hidden ${isDropdownOpen ? "block" : "hidden"}`}
      >
        <div className="rounded-lg shadow-md bg-[#030406] ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img alt="K3DF" className="h-14 w-14 sm:h-14" src=".\Images\Logo.png" />
            </div>
            <div className="-mr-2">
              <button
                id="close_btn"
                type="button"
                className="bg-[#030406] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Close main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#product" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Products</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      </div>
  
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline italic font-sans">It's better to think in</span>
                <span className="block text-[#ff0000] xl:inline italic">3D</span>
              </h1>
              <p
                className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 italic">
                Karnix3DFarm is a 3D printing service provider in India. It offers various services related
                to 3D printing such as prototyping, tooling, custom designs and more.</p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <a href="#product"
                  className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-lg group">
                  <span
                    className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span
                    className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span
                    className="relative w-full text-left font-bold text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Get
                    Started</span>
                  <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
                </a>
  
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="\Images\Hero.avif" alt=""/>
      </div>
    </div>
  
    {/* <!--  PRODUCTS--> */}
  
    <div  className="bg-[#030406]">
      <div 
      
        className=" max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div id="product">
  
          {/* <!-- Technical Specifications --> */}
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl reveal ">Technical <span
              className="text-[#ff0000]">Specification</span></h2>
              
              <p className="mt-4 text-white reveal">Air rifle grip has been always the most demanding product from our clientele. The most preferred product that fits to every Air Rifle and provides a comfortable grip while you shoot. Feel free to customize your preferences of size, color, and engineering experience! </p>
  
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 reveal">
            <div className="border-t border-white pt-4 ">
              <dt className="font-medium text-[#ff0000] ">Origin</dt>
              <dd className="mt-2 text-sm text-white">Designed by Karnix3DFarm</dd>
            </div>
  
            <div className="border-t border-white pt-4 ">
              <dt className="font-medium text-[#ff0000] ">Material</dt>
              <dd className="mt-2 text-sm text-white">High quality plastic like PLA, ABS, PTG</dd>
            </div>
  
            <div className="border-t border-white pt-4">
              <dt className="font-medium text-[#ff0000] ">Dimensions</dt>
              <dd className="mt-2 text-sm text-white">Customized according to your hand</dd>
            </div>
  
            <div className="border-t border-white pt-4">
              <dt className="font-medium text-[#ff0000]">Finish</dt>
              <dd className="mt-2 text-sm text-white">Customized as per you choice</dd>
            </div>
  
            <div className="border-t border-white pt-4">
              <dt className="font-medium text-[#ff0000]">Colour</dt>
              <dd className="mt-2 text-sm text-white">Customized as per you choice</dd>
            </div>
  
            <div className="border-t border-white pt-4">
              <dt className="font-medium text-[#ff0000]">Gun</dt>
              <dd className="mt-2 text-sm text-white">Made for Air Rifles</dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src="/Images/Precihole5-removebg-preview.png" alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg reveal"/>
            <img src="/Images/Black Grip.png" alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg reveal"/>
          <img src="/Images/Red Grip.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg reveal"/>
          <img src="/Images/Blue grip.png" alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg reveal"/>
        </div>
      </div>
    </div>
  
  
    {/* <!-- OFFERING --> */}
  
  
    <div id="services" className="py-12 bg-[#030406]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white tracking-wide uppercase reveal">Why Us?</h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl reveal">We Are Best In The {" "}
            <span className="text-[#ff0000]">Industry</span> </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto reveal">You get to choose from our wide ranged variety of services   </p>
        </div>
  
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
  
            {/* <!-- SERVICE - 1 --> */}
            
            <div className="relative reveal">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Cube</title><path d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M69 153.99l187 110 187-110M256 463.99v-200"/></svg>
                  
                  
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-[#ffffff] underline decoration-2 decoration-[#ff2626] ">Prototyping</p>
              </dt> 
              <dd className="mt-2 ml-16 text-base text-white">Help you build tangible prototypes from your 3D CAD models. Our efficient solutions allow you to make changes and improvements quickly and easily, without the need for expensive tooling or lengthy development cycles.</dd>
            </div>
            
            {/* <!-- SERVICE - 2 --> */}
            
            <div className="relative reveal">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                  {/* <!-- Heroicon name: outline/scale --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Bulb</title><path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 00-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24M224 480h64M208 432h96M256 384V256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M294 240s-21.51 16-38 16-38-16-38-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                  
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-[#ffffff] underline decoration-2 decoration-[#ff2626] ">Designing</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-white">Unique opportunity to create your own one-of-a-kind 3D printed object based on your idea or your design.</dd>
            </div>
            
            {/* <!-- SERVICE - 3 --> */}
            
            <div className="relative reveal">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Folder Open</title><path d="M64 192v-72a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H408a40 40 0 0140 40v40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M479.9 226.55L463.68 392a40 40 0 01-39.93 40H88.25a40 40 0 01-39.93-40L32.1 226.55A32 32 0 0164 192h384.1a32 32 0 0131.8 34.55z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                  
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-[#ffffff] underline decoration-2 decoration-[#ff2626] ">3D Printing File Creation</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-white">3D Printer files are made by using Computer Aided Model (CAD) software which allows you to create what your model will look like. We provide high quality, affordable and great service for every customer.</dd>
            </div>
            
            {/* <!-- SERVICE - 4 --> */}
  
            <div className="relative reveal">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Construct</title><path d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-[#ffffff] underline decoration-2 decoration-[#ff2626] ">Optimization & Repair</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-white">Our service includes a full inspection of your model, as well as a review of the repair process. Karnix3DFarm will improve the quality of your design through advanced algorithms and software, in addition to offering fixes for common issues</dd>
            </div>
          </dl>
        </div>
  
      </div>
    </div>
    
    {/* <!-- TESTIMONIALS --> */}
    <section className="bg-[#030406]">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl text-white font-semibold tracking-tight sm:text-5xl reveal">
            Read <span className="text-[#ff0000]">trusted</span> reviews from our <span
            className="text-[#ff0000]">customers</span>
          </h2>
          
          <p className="max-w-lg text-white mx-auto mt-4 text-gring-offset-warm-gray-500 reveal">
            We strongly believe in offering the best service and product for our Customer
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 ">
          
          {/* <!-- CARD 1 --> */}
  
          <div className="reveal shadow-2xl shadow-black">
            <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZW9wbGUlMjBsYXVnaGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt=""
            className="object-cover w-24 h-24 mx-auto rounded-full  " />
            
            <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p className="text-lg font-bold text-gray-700">Katie</p>
              <p className="mt-1 text-xs font-medium text-white">
                Digital Marketing at Studio
              </p>
              <p className="mt-4 text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                voluptatem alias ut provident sapiente repellendus.
              </p>
              
              
            </blockquote>
          </div>
          
          {/* <!-- CARD 2 --> */}
  
          <div className="reveal">
            <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwbGF1Z2hpbmd8ZW58MHx8MHx8fDA%3D" alt=""
            className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl" />
  
            <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p className="text-lg font-bold text-gray-700">Katie</p>
              <p className="mt-1 text-xs font-medium text-white">
                Digital Marketing at Studio
              </p>
              <p className="mt-4 text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                voluptatem alias ut provident sapiente repellendus.
              </p>
  
  
            </blockquote>
          </div>
  
  
          {/* <!-- CARD 3 --> */}
  
          <div className="reveal">
            <img src="https://images.unsplash.com/photo-1531924224004-7beee12117a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBlb3BsZSUyMGxhdWdoaW5nfGVufDB8fDB8fHww" alt=""
              className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl" />
  
            <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl">
              <p className="text-lg font-bold text-gray-700">Katie</p>
              <p className="mt-1 text-xs font-medium text-white">
                Digital Marketing at Studio
              </p>
              <p className="mt-4 text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                voluptatem alias ut provident sapiente repellendus.
              </p>
  
  
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  
    {/* <!-- CONTACT US SECTION --> */}
  
    <section id="contact" className="bg-[#030406] ">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 reveal">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-white text-lg reveal">
              Contact us and we'll talk about the best way to make your ideas come to life.
            </p>
  
            <div className="mt-8 reveal">
              <a href="" className="text-2xl font-semibold text-[#ff0000] reveal"> 0151 475 4450 </a>
  
              <address className="mt-2 text-white not-italic reveal">Address: Andromeda Galaxy</address>
            </div>
          </div>
  
          {/* <!-- CONTACT US FORM --> */}
  
          <div id="contact"
            className="p-8 border bg-white border-gray-500 rounded-lg shadow-lg lg:p-12 lg:col-span-3 reveal ">
            <form action="" className="space-y-4 reveal" id="form">
  
              {/* <!-- NAME --> */}
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input required autoComplete="off" className="w-full p-3 text-sm border-solid border-2  rounded-lg" placeholder="Name"
                  type="text" id="name" />
                  <span id="nameErr" className="text-red-600 text-sm hidden">*Invalid name</span>
                
              </div>
  
              {/* <!-- EMAIL --> */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                <div className="">
                  <label className="sr-only " htmlFor="email">Email</label>
                  <input className="w-full p-3 text-sm border-solid border-2  rounded-lg" autoComplete="off"
                    placeholder="Email address" type="email" id="email" />
                  <span id="emailErr" className="text-red-600 text-sm hidden">*Invalid email</span>
                  
  
                </div>
   
                {/* <!-- PHONE --> */}
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input className="w-full p-3 text-sm border-solid border-2  rounded-lg" autoComplete="off"
                    placeholder="Phone Number" type="text" id="phone" />
                  <span id="phoneErr" className="text-red-600 text-sm hidden">*Invalid phone number</span>
                  
  
                </div>
              </div>
  
  
              {/* <!-- MESSAGE --> */}
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea className="w-full p-3 text-sm  rounded-lg" placeholder="Message (Optional)" rows="8"
                  id="message"></textarea>
              </div>
  
              {/* <!-- SUBMIT ENQUIRY BUTTON --> */}
  
              <div className="mt-4">
                <a href="#_" id="submit_btn"
                  className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                  <span
                    className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                  <span
                    className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                  <span
                    className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Send
                    Enquiry</span>
                  <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                </a>
              </div>
  
            </form>
          </div>
        </div>
      </div>
      
    </section>
  
    {/* <!-- FOOTER  --> */}
    <footer className="bg-[#030406]">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <img alt="K3DF" className="h-14 w-14 sm:h-14" src="\Images\Logo.png"/>
  
          </div>
  
          <p className="mt-4 text-sm text-center text-white lg:text-right lg:mt-0">
            Copyright &copy; 2022. All rights reserved.
            <br/>
            <small>Made by {" "}
              <a href="https://twitter.com/SalviVishv?t=jPPaBwzjuQVzrjSRfUN07Q&s=08" target="_blank"
                className="text-red-600">Vishvsalvi</a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  
  </>
  );
}
