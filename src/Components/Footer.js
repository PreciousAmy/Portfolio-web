import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  const toggleTop = () => {
    scroll.scrollToTop();
  };

  const links = [
    {
      id: 1,
      child: (
        <>
          {" "}
           <FaLinkedin size={20} />{" "}
        </>
      ),
      href: "https://www.linkedin.com/in/precious-amarachi-emeh-a2826619b",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          {" "}
           <FaGithub size={20} />{" "}
        </>
      ),
      href: "https://github.com/PreciousAmy",
    },
    {
      id: 3,
      child: (
        <>
          {" "}
           <HiOutlineMail size={20} />{" "}
        </>
      ),
      href: "mailto: preciouznichole@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          {" "}
           <BsFillPersonLinesFill size={20} />{" "}
        </>
      ),
      href: "/Precious Amarachi Emeh cv.docx",
      style: " rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="bg-black text-white ">
      <div className="flex flex-col items-center  sm:flex  justify-around ">
        <div>
          <h2 to="/" onClick={toggleTop} className="text-4xl  ml-2 my-5 font-semibold">
            Port<span className="text-red-800">folio</span>
          </h2>
        </div>
        <div className="font-bold my-8"> 
          Precious-Emeh <span>&#169;</span> {new Date().getFullYear()} All
          rights Reserved.
        </div>
        <div>
          <ul className=" flex flex-row my-5 ">
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "  flex justify-between items-center my-3 px-4 hover:scale-110 duration-500  " +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex  justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <> {child} </>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
