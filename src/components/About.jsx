import React from "react";

const About = () => {
  return (
    // MIDDLE CONTENTS
    <div name="About" className="w-full my-32 py-56 sm:py-[60px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-2xl py-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laboriosam maiores aperiam saepe ratione voluptatem dolorumUSER
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laboriosam maiores aperiam saepe ratione voluptatem dolorum
            excepturi sit! Veniam tempore quia aperiam consequatur libero
            tempora fugit debitis reiciendis ullam voluptates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-2 px-1 text-center">
          <div className="py-8 border-2 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-[#264ac4]">100%</p>
            <p className="text-gray-600 mt-2">Competitions</p>
          </div>
          <div className="py-8 border rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-[#264ac4]">24/7</p>
            <p className="text-gray-600 mt-2">Delivery</p>
          </div>
          <div className="py-8 border rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-[#264ac4]">100k</p>
            <p className="text-gray-600 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
