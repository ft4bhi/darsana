"use client";
import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"


const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper" onClick={() => window.open("https://www.facebook.com/")}><BsFacebook /></div>
            <div className="header_top_icon_wrapper" onClick={() => window.open("https://www.linkedin.com/")}><BsLinkedin /></div>
            <div className="header_top_icon_wrapper"><BsTwitter onClick={() => window.open("https://twitter.com/")} /></div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>© 2022 Darsana.</b>with our trust
          </div>
          <div className="flex gap-4">
            {/* <select
              className="text-gray-500 text-[12px] w-[70] border rounded-md border-gray-300 px-2 py-1"
              name="currency" id="currency">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>

            </select>

            <select
              className="text-gray-500 text-[12px] w-[70] border rounded-md border-gray-300 px-2 py-1"
              name="language" id="language">
              <option value="english">ENGLISH</option>
              <option value="malayalam">MALAYALAM</option>
              <option value="hindi">HINDI</option>

            </select> */}
          </div>
        </div>


      </div>
    </div>
  );
};

export default HeaderTop;
