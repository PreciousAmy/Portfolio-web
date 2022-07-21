import React from "react";
import Photo from "../Images/imgaa.jpeg";


const About = () => {
  return (
    <div name="about" className=" h-full w-full bg-gradient-to-b from-neutral-800 to-stone-800">
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-around h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl font-bold sm:text-4xl mb-8 text-white ">About Me</h2>
          <h5 className="text-1xl sm:text-2xl mb-3 text-red-800">Front-End Developer</h5>
          <p className=" text-slate-200 py-4 max-w-md">
            I am a front-end developer, with knowledge of HTML, CSS, JAVASCRIPT
            AND REACT. I started my tech journey early this year at ASHPOT ng.
            I'm working towards becoming one of the best front end developers
            out there, with my dedication and passion for coding and creating
            websites, i believe i will be one of the best soon.
          </p>
          {/* <div>
            <button className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-red-800 to-rose-900 cursor-pointer">Portfolio <span className="group-hover:rotate-90 duration-300"> <MdKeyboardArrowRight size={25} className="ml-1"/></span></button>
          </div> */}
        </div>

        <div>
            <img className="h-80 rounded-2xl md:w-fit w-64 brightness-75  " src={Photo} alt="Precious" />
        </div>
        
        
      </div>
    </div>
  );
};

export default About;
