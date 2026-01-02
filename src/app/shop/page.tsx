import OurProductCard from "@/component/OurProductCard";
import {
  MenuCircleIcon,
  PreferenceHorizontalIcon,
  TimelineListIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    desc: "Stylish cafe chair",
    image: "/images/pr1.jpg",
    pricediscount: "$499",
    price: "$599",
    additional: "new",
  },
  {
    id: 2,
    name: "Modern Chair",
    desc: "Stylish cafe chair",
    image: "/images/pr2.png",
    pricediscount: "$299",
    price: "$399",
    additional: "-30%",
  },
  {
    id: 3,
    name: "Modern Table",
    desc: "Stylish cafe table",
    image: "/images/pr3.jpg",
    pricediscount: "$599",
    price: "$699",
    additional: "new",
  },
  {
    id: 4,
    name: "Modern Bed",
    desc: "Stylish cafe bed",
    image: "/images/pr4.png",
    pricediscount: "$799",
    price: "$899",
    additional: "-50%",
  },
  {
    id: 5,
    name: "Modern Lamp",
    desc: "Stylish cafe lamp",
    image: "/images/pr5.jpg",
    pricediscount: "$199",
    price: "$299",
    additional: "new",
  },
  {
    id: 6,
    name: "Modern Shelf",
    desc: "Stylish cafe shelf",
    image: "/images/pr6.png",
    pricediscount: "$399",
    price: "$499",
    additional: "new",
  },
  {
    id: 7,
    name: "Modern Cupboard",
    desc: "Stylish cafe cupboard",
    image: "/images/pr7.png",
    pricediscount: "$699",
    price: "$799",
    additional: "-20%",
  },
  {
    id: 8,
    name: "Modern Dresser",
    desc: "Stylish cafe dresser",
    image: "/images/pr2.png",
    pricediscount: "$599",
    price: "$699",
    additional: "-10%",
  },
];

function page() {
  return (
    <section className="pt-20">
      <div className="relative shop-bg bg-lightCream h-[320px] w-full flex flex-col justify-center text-center items-center font-poppins">
        <div className="z-20">
          <h1 className="text-lg md:text-[48px]">Shop</h1>
          <p className="text-md md:text-[16px]">
            <span className="font-bold">Home {" > "} </span>Shop
          </p>
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-lightCream/60 flex flex-col items-center justify-center z-10 "></div>
      </div>
      {/* filter */}
      <div className="bg-cream">
        <div className="container mx-auto px-4 py-10 font-poppins flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-5">
              <div className="flex cursor-pointer">
                <HugeiconsIcon icon={PreferenceHorizontalIcon} className="" />
                <p className="ml-3">Filter</p>
              </div>
              <HugeiconsIcon
                className="cursor-pointer"
                fill="black"
                icon={MenuCircleIcon}
              />
              <HugeiconsIcon icon={TimelineListIcon} />
              <div className="border-r border h-10 "></div>
              <p>Showing 1 -16 of 32 results</p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex gap-10">
                <p>
                  Show{" "}
                  <span className="bg-white p-3 ml-3 text-[#9F9F9F]">16</span>{" "}
                </p>
                <p>
                  Short by{" "}
                  <span className="bg-white p-3 ml-3 text-[#9F9F9F] pr-10">
                    Default
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------- products ------------------- */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <OurProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
