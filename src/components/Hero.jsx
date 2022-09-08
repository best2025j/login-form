import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  ServerIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import Image from "../assets/ivancik.jpg";

const Hero = () => {
  return (
    // ABOUT THE BODY
    <div
      name="Home"
      className="w-full h-[41.70rem] py-4 md:py-2 bg-zinc-300 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">

                              {/* BODY CONTENT */}

        <div className="flex flex-col justify-center md:items-start px-2 py-20 w-full">
          <p className="text-[20px] font-semibold font-serif">
            Unique Sequencing & Productions
          </p>
          <h1 className="py-2 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-[20px] font-[500]">This is our Tech Brand.</p>
          <button className="py-3 px-6 sm:w-[50%] active:text-white active:bg-[#264ac4] my-4">
            Get Started
          </button>
        </div>

        <div className="">
          <img src={Image} alt="/" className="w-full xl:w-[50rem] xl:ml-14" />
        </div>

                              {/* DATA SERVICE */}

        <div
          className=" absolute flex flex-col md:min-w-[780px] bottom-[-65%] sm:bottom-[-12%] py-4 pb-8 mx-1 md:left-[20%]
        bg-zinc-200 border  border-slate-400 rounded-xl text-center shadow-xl"
        >
          <p className="font-bold">Data Service</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex py-2 text-slate-500">
              {<CloudUploadIcon className="h-6 text-indigo-600" />} App Security
            </p>
            <p className="flex py-2 text-slate-500">
              {<DatabaseIcon className="h-6 text-indigo-600" />} Dashboard
              Designs
            </p>
            <p className="flex py-2 text-slate-500">
              {<ServerIcon className="h-6 text-indigo-600" />} Cloud Data
            </p>
            <p className="flex py-2 text-slate-500">
              {<PaperAirplaneIcon className="h-6 text-indigo-600" />} API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
