import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-stone-800 to-neutral-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 ">
        <div className="">
          <div className="text-center py-1">
            <h4 className="text-1xl sm:text-2xl text-slate-100 mx-12 capitalize">
              Hello, i'm Precious Emeh
            </h4>
          </div>
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              FRONT-END DEVELOPER
            </h2>
          </div>
          <div className="text-center py-1">
            <p className="text-1xl sm:text-2xl text-slate-100">
              Html, Css, Bootstrap, JavaScript, and ReactJs
            </p>
          </div>
        </div>
        <div>
          <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
            <button
              className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-red-800 to-rose-900 cursor-pointer"
            >
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
