import React from "react";

function Footer() {
  return (
    <section className="my-10 border-t pt-10">
      <div className="container mx-auto px-4 font-poppins ">
        <div className="block md:flex justify-between border-b pb-10">
          {/* logo */}
          <div>
            <h1 className="font-bold text-lg md:text-[24px] leading-[100%] text-black">
              Furniro.
            </h1>
            <p className="text-md md:text-[16px] text-[#9F9F9F] mt-5 md:mt-20">
              400 University Drive Suite, <br /> 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>
          {/* Links */}
          <div className="mt-10 md:mt-0">
            <p className="text-md md:text-[16px] text-[#9F9F9F]">Links</p>
            <ul>
              <li className="my-5">
                <a href="#">Home</a>
              </li>
              <li className="my-5">
                <a href="#">Shop</a>
              </li>
              <li className="my-5">
                <a href="#">About</a>
              </li>
              <li className="my-5">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          {/* help */}
          <div className="mt-10 md:mt-0">
            <p className="text-md md:text-[16px] text-[#9F9F9F] ">Help</p>
            <ul>
              <li className="my-5">
                <a href="#">Payment Options</a>
              </li>
              <li className="my-5">
                <a href="#">Returns</a>
              </li>
              <li className="my-5">
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="mt-10 md:mt-0">
            <p className="text-md md:text-[16px] text-[#9F9F9F] mb-5">
              Newsletter
            </p>
            <div className="flex flex-row gap-5">
              <input
                className="outline-none border-b bg-transparent placeholder:text-gray-400"
                type="email"
                placeholder="Enter Your Email Address"
                // autoComplete="off"
              />
              <button
                className="border-b cursor-pointer hover:text-red-500 transition duration-300"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-left text-[#9F9F9F]">
          <p>2023 furino. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
