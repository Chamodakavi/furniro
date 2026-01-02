import {
  ArrowRight01Icon,
  CircleArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

function RoomInspiration() {
  return (
    <section className="my-10">
      <div className="bg-lightCream">
        <div className="container mx-auto justify-between px-4 py-10 font-poppins">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex flex-col align-center justify-center">
              <h1 className="text-3xl lg:text-[40px] leading-[120%] text-lightBlack font-bold my-3">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="text-sm md:text-[16px] leading-[150%]">
                Our designer already made a lot of beautiful prototype of rooms
                that inspire you
              </p>
              <button className="text-white bg-darkBrown cursor-pointer hover:bg-white hover:text-darkBrown border p-3 mt-7 transition duration-300 leading-[150%] w-60">
                Explore More
              </button>
            </div>
            <div>
              <div className="relative ">
                <img
                  src="/images/room1.png"
                  alt="Room"
                  className="w-full object-cover h-[550px]"
                />

                <div className="absolute bottom-6 left-6 bg-[#FFFFFFB8] backdrop-blur-sm p-6 max-w-[60%] shadow-sm">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg md:text-[16px] text-[#616161] leading-[150%]">
                      01 - Bed Room
                    </p>
                    <h1 className="text-2xl md:text-[28px] leading-[120%] font-bold text-black">
                      Inner Peace
                    </h1>
                  </div>

                  <div className="absolute -right-12 bottom-0 w-12 h-12 bg-[#B88E2F] flex items-center justify-center text-white">
                    →
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-3">
                <img src="/images/room2.png" alt="" className="h-[500px]" />
                <div className="flex gap-10">
                  <img src="/images/active.png" alt="" />
                </div>
              </div>
              <div className="absolute top-60 right-5 flex items-center justify-center text-darkBrown bg-white rounded-[50%] cursor-pointer w-10 h-10 shadow-md hover:bg-darkBrown hover:text-white">
                <HugeiconsIcon size={30} icon={ArrowRight01Icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomInspiration;
