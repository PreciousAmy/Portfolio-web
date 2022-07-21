import React from 'react'
import { AiFillHtml5 } from "react-icons/ai"
import { IoLogoJavascript} from "react-icons/io"
import {SiTailwindcss} from "react-icons/si"

const Services = () => {
  return (
    <>
        
        <div name="services" className='w-full py-[10rem] px-4 bg-gradient-to-b from-stone-800 to-neutral-800'>
           <h2 className='text-2xl font-bold sm:text-4xl  text-white text-center mb-20 sm:px-0 '>My Services</h2>
           <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  bg-gray-300 md:hover:scale-105 duration-200'>
                 <AiFillHtml5 className='text-red-800 mx-auto text-2xl' size={35} />
                <p className='mt-6 text-1xl text-black font-bold'> I design web-pages and build reusable codes.
                </p>
                <p className='mt-4 text-1xl text-black font-bold'>
                    I also design/develop new facing features with the use of html, css, javascript and react js.
                </p>

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-6 rounded-lg bg-gray-300 md:hover:scale-105 duration-200'>
                 <IoLogoJavascript className='text-red-800 mx-auto text-2xl ' size={35} />
                <p className='mt-6 text-1xl text-black font-bold'> I also ensure to optimize
                   web pages for maximum speed and scalability..
                </p>
                <p className='mt-4 text-1xl text-black font-bold'>
                     I also ensure web design is optimized for smartphones, maintaining
                    brand consistency throughout the design
                </p>

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-gray-300 md:hover:scale-105 duration-200'>
                 <SiTailwindcss className='text-red-800 mx-auto text-2xl ' size={35} />
                <p className='mt-6 text-1xl text-black font-bold'> I possess knowledge of Vanilla css, Tailwind css and Bootstrap.
                </p>
                <p className='mt-4 text-1xl text-black font-bold'>
                I specialize in determining the structure and design of web pages.,
               ensuring user experience determine my design choices ,building
                 reusable codes for future purposes.
                </p>

            </div>
           
           
    


           </div>


        </div>

      
    </>
  )
}

export default Services

