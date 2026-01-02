import React from "react";

function Hero() {
  return (
    <div className="hero-bg bg-black h-[100vh] w-full">
      <div className="container mx-auto h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* mobile breaker */}
          <div className="hidden md:block lg:block"></div>
          {/* desktop */}
          <div className="bg-cream mt-[20%] p-5 md:p-10 lg:p-15 flex flex-col gap-5 rounded-[10px] font-poppins mx-5 md:mx-0">
            <p className="text-[16px] tracking-[3px] font-bold">New Arrival</p>
            <h1 className="text-5xl md:text-[52px] font-bold text-darkBrown">
              Discover Our New Collection
            </h1>
            <p className="text-md md:text-[18px]">
              Explore the latest trends in furniture and elevate your living
              space with our new collection.
            </p>
            <button className="bg-darkBrown text-white w-[180px] h-[50px] p- mt-10 cursor-pointer hover:bg-white hover:text-darkBrown transition-all duration-300 border">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
