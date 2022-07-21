import React from 'react'
import {FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

const Socials = () => {
    const  links = [
        {
            id: 1,
            child: (
                <> LinkedIn <FaLinkedin size={28} /> </>
            ),
            href: "https://www.linkedin.com/in/precious-amarachi-emeh-a2826619b",
            style: 'rounded-tr-md'
                
            
        },
        {
            id: 2,
            child: (
                <> GitHub <FaGithub size={28} /> </>
            ),
            href: "https://github.com/PreciousAmy",
            
        },
        {
            id: 3,
            child: (
                <> Mail <HiOutlineMail size={28} /> </>
            ),
            href: "mailto: preciouznichole@gmail.com",
            
        },
        {
            id: 4,
            child: (
                <> Resume <BsFillPersonLinesFill size={28} /> </>
            ),
            href: "/Precious Amarachi Emeh cv.docx",
            style: ' rounded-br-md',
            download: true,
            
        }

    ]


  return (
    <div className='hidden lg:flex-col top-[35%] left-0 fixed '>
        <ul>
            {links.map(( {id, child, href, style, download}) => (
               <li key={id} className={ "flex justify-between items-center w-40 h-14 bg-gray-700 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-500" + " " + style}>
                  <a  href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank'> <> {child} </></a>
               </li>

            ))}
           
        </ul>
      
    </div>
  )
}

export default Socials
