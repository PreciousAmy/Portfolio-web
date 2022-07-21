import React from "react";
import todo from "../Images/todo.JPG";
import photoa from "../Images/cafe.PNG"
import photob from "../Images/naija.PNG"
import photoc from "../Images/access1.PNG"
import photod from "../Images/Calculator.JPG"
import photoe from "../Images/capnetflix.JPG"

const Portfolio = () => {
  const port = [
    {
      id: 1,
      src: photoa 
    },

    {
      id: 2,
      src: photob
    },

    {
      id: 3,
      src: photoc 
    },

    {
      id: 4,
      src: photod
    },

    {
      id: 5,
      src: photoe 
    },

    {
      id: 5,
      src: todo
    }

  ]




  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-neutral-800 to-stone-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-gray-500 mx-auto">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          port.map(({id, src}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
            <img src={src} alt="" className="rounded-lg h-52 w-full  duration-200 hover:scale-105 " />
            {/* <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
            </div> */}
          </div>

          ))
        }
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
