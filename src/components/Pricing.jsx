import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

const Pricing = () => {
  return (
    <div name="Pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-2 text-slate-400">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-4 ">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            iusto eligendi perspiciatis a cum omnis consectetur sed accusamus
            vero. Assumenda obcaecati cum repellendus quidem aut maiores,
            accusantium soluta molestias vel?
          </p>
        </div>

        {/* CARD */}
        <div className="grid md:grid-cols-2">
          {/* STANDARD SUBSCRIPTION */}

          <div className="text-slate-900 bg-white m-4 p-8 rounded-xl relative shadow-2xl">
            <span className="uppercase px-2 py-2 bg-[#264ac4] rounded-2xl text-sm">
              standards
            </span>

            <div>
              <p className="text-6xl py-4 font-bold flex">
                $49
                <span className="text-slate-500 flex flex-col text-xl justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-4 text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="space-y-6 md:text-xl relative">
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <button className="py-2  active:text-white active:bg-[#264ac4] w-full px-3">Get Started</button>
            </div>
          </div>

          {/* for primium subscriptions */}

          <div className="text-slate-900 bg-white m-4 p-8 relative rounded-xl shadow-2xl">
            <span className="uppercase px-2 py-2 bg-[#264ac4] rounded-2xl text-sm">
              primium
            </span>

            <div>
              <p className="text-6xl py-4 font-bold flex">
                $99
                <span className="text-slate-500 flex flex-col text-xl justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-4 text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="space-y-6 md:text-xl relative">
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <div className="flex w-full">
                <span>
                  <CheckIcon className="w-5 mr-5 text-green-500" />
                </span>
                <p>Lorem ipsum</p>
                dolor,
              </div>
              <button className="py-2  active:text-white active:bg-[#264ac4] w-full px-3">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
