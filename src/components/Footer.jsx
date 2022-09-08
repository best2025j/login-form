import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    //   GRID CONTENT LAYER
    <div className="w-full mt-24 bg-slate-900 text-slate-300 py-4 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600 py-4">
        <div>
          <h2 className="font-bold pt-2 uppercase">solutions</h2>
          <ul>
            <li>Marketting</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">support</h2>
          <ul>
            <li>Pricing</li>
            <li>Documentations</li>
            <li>Guides</li>
            <li>Api-Status</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">legal</h2>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            
            <li>Teams</li>
            <li>Political</li>
            <li>Condictions</li>
          </ul>
        </div>

        {/* SUBSRIBE */}

        <div className="div col-span-2 pt-8 md:pt-2">
          <p className="font-bold text-2xl uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news,articles, and resources, sent to the inbox weekly..
          </p>
          <form className="flex flex-col sm:flex-row" action="/action_page.php">
            <input
              type="text"
              className="w-full p-2 mr-4 rounded-md mb-4"
              placeholder="enter your email..."
            />
            <button className="p-2 mb-4 active:bg-[#264ac4] active:text-[#fff]">Subscribe</button>
          </form>
        </div>
      </div>

      {/* SOCIAL MEDIA LINKS */}

      <div className="flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row border-t flex text-center text-gray-500">
        <p className="py-4">2022 workflow , llc, All rights reserved.</p>
        <div className="flex justify-between sm:w-[360px] pt-4 text-2xl cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
          <FaTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
