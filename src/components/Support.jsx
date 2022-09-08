import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { ChipIcon } from "@heroicons/react/solid";
import { SupportIcon } from "@heroicons/react/solid";
import Image2 from "../assets/ivana-squares.jpg";
const Support = () => {
  return (
    //   IMAGE BODY

    <div name="Support" className="w-full mt-[-16rem] md:mt-[-10rem]">
      <div className="w-full h-[700px] bg-gray-700/90 absolute">
        <img
          src={Image2}
          alt="/"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* IMAGE TEXT */}

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl py-6 text-center font-bold text-white">
            Finding the right team
          </h3>
          <p className="text-1xl md:text-3xl py-4 text-slate-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita a
            corporis placeat similique maxime molestiae laborum, hic eligendi
            inventore magnam ea fugit rerum ullam! Reiciendis voluptate autem
            tempore odit adipisci.
          </p>
        </div>

        {/* SALES */}

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-2 gap-y-16 px-4 pt-24 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 rounded-lg bg-[#264ac4] mt-[-4rem] text-slate-100" />
              <h3 className="font-bold text-2xl">Sales</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                modi omnis possimus qui ducimus, tenetur illo. Id, quasi porro
                eveniet nesciunt molestiae labore earum, recusandae nihil quia
                harum eos et.
              </p>
            </div>
            <div className="px-8 pt-2 pb-4 bg-slate-200 font-bold">
              <p className="text-[#264ac4] flex ">
                Contact Us <ArrowRightIcon className="w-3 ml-2" />
              </p>
            </div>
          </div>

          {/* TECHNICAL SUPPORT */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 rounded-lg bg-[#264ac4] mt-[-4rem] text-slate-100" />
              <h3 className="font-bold text-2xl">Technical Support</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                modi omnis possimus qui ducimus, tenetur illo. Id, quasi porro
                eveniet nesciunt molestiae labore earum, recusandae nihil quia
                harum eos et.
              </p>
            </div>
            <div className="px-8 pt-2 pb-4 bg-slate-200 font-bold">
              <p className="text-[#264ac4] flex ">
                Contact Us <ArrowRightIcon className="w-3 ml-2" />
              </p>
            </div>
          </div>

          {/* MEDIA INQUARIES */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 rounded-lg bg-[#264ac4] mt-[-4rem] text-slate-100" />
              <h3 className="font-bold text-2xl">Media Inquaries</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                modi omnis possimus qui ducimus, tenetur illo. Id, quasi porro
                eveniet nesciunt molestiae labore earum, recusandae nihil quia
                harum eos et.
              </p>
            </div>
            <div className="px-8 pt-2 pb-4 bg-slate-200 font-bold">
              <p className="text-[#264ac4] flex ">
                Contact Us <ArrowRightIcon className="w-3 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
