import React from "react";

function RangeSec() {
  return (
    <section className="my-10">
      <div className="container mx-auto px-4 font-poppins">
        <div className="text-center">
          <h1 className="text-xl md:text-[32px] font-bold text-lightBlack">
            Browse The Range
          </h1>
          <p className="text-[20px] text-lightBlack">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-3 md:mt-10 gap-5">
            <div>
              <img
                className="w-full h-[300px] md:h-[480px] object-cover rounded-[10px]"
                src="/images/range1.png"
                alt=""
              />

              <p className="text-md md:text-[24px] font-bold text-lightBlack mt-3">
                Dining
              </p>
            </div>

            <div>
              <img
                className="w-full h-[480px] object-cover rounded-[10px]"
                src="/images/range2.png"
                alt=""
              />
              <p className="text-md md:text-[24px] font-bold text-lightBlack mt-3">
                Living
              </p>
            </div>

            <div>
              <img
                className="w-full h-[480px] object-cover rounded-[10px]"
                src="/images/range3.png"
                alt=""
              />
              <p className="text-md md:text-[24px] font-bold text-lightBlack mt-3">
                Bedroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RangeSec;
