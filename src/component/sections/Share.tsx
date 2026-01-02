import React from "react";

function Share() {
  return (
    <section className="my-10 w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="font-poppins mb-8">
        <div>
          <p className="leading-[150%] text-md md:text-[20px] text-center text-[#616161]">
            Share your setup with
          </p>
          <h1 className="text-xl md:text-[40px] text-[#3A3A3A] leading-[120%] font-bold text-center">
            #FuniroFurniture
          </h1>
        </div>
      </div>

      {/* Masonry Image Gallery */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 px-4">
        {/* Column 1 (Far Left) - Aligned to bottom of the row visually */}
        <div className="flex flex-col gap-4 w-full md:w-[15%] items-end justify-end">
          <div className="relative group w-full">
            <img
              src="/images/gallery (1).png"
              alt="Shelf setup"
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative group w-full">
            <img
              src="/images/gallery (2).png"
              alt="Chair"
              className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Column 2 (Mid Left) - Pushed down slightly */}
        <div className="flex flex-col gap-4 w-full md:w-[20%] pt-8">
          <div className="relative group w-full">
            <img
              src="/images/gallery (3).png"
              alt="Laptop desk"
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative group w-full">
            <img
              src="/images/gallery (4).png"
              alt="Vase aesthetic"
              className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Column 3 (Center) - The Anchor Image */}
        <div className="flex flex-col gap-4 w-full md:w-[25%] items-center justify-center">
          <div className="relative group w-full">
            <img
              src="/images/gallery (5).png"
              alt="Dining room"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
            />
          </div>
        </div>

        {/* Column 4 (Mid Right) - Pushed down slightly */}
        <div className="flex flex-col gap-4 w-full md:w-[20%] pt-12">
          <div className="relative group w-full">
            <img
              src="/images/gallery (6).png"
              alt="Bedroom"
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative group w-full">
            <img
              src="/images/gallery (7).png"
              alt="Frame"
              className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Column 5 (Far Right) - Top aligned */}
        <div className="flex flex-col gap-4 w-full md:w-[15%] items-start">
          <div className="relative group w-full">
            <img
              src="/images/gallery (8).png"
              alt="Brick wall"
              className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative group w-full">
            <img
              src="/images/gallery (9).png"
              alt="Kitchen tiles"
              className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Share;
