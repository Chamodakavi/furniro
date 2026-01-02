import OurProductCard from "@/component/OurProductCard";
import {
  ChampionIcon,
  CheckmarkBadge02Icon,
  ContainerTruck02Icon,
  CustomerServiceIcon,
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
      <div className="bg-cream py-6 font-poppins">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-70">
                <HugeiconsIcon icon={PreferenceHorizontalIcon} />
                <span className="text-md md:text-[20px]">Filter</span>
              </div>

              <div className="flex items-center gap-4">
                <HugeiconsIcon
                  className="cursor-pointer  hidden md:block"
                  fill="black"
                  icon={MenuCircleIcon}
                />
                <HugeiconsIcon
                  className="cursor-pointer hidden md:block"
                  icon={TimelineListIcon}
                />
              </div>
            </div>
            {/* lg divider */}
            <div className="hidden sm:block h-8 w-[2px] bg-[#9F9F9F] opacity-50"></div>

            <p className="text-md md:text-[16px]">
              Showing 1 - 16 of 32 results
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-md md:text-lg lg:text-[20px]">Show</span>
              <div className="bg-white px-4 py-3 text-[#9F9F9F] text-sm cursor-pointer">
                16
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-md md:text-lg lg:text-[20px]">Sort by</span>
              <div className="bg-white px-6 py-3 text-[#9F9F9F] text-sm min-w-[120px] cursor-pointer">
                Default
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
      {/* buttons */}
      <div>
        <div className="flex justify-center items-center gap-5 mb-10">
          <button className="bg-cream text-black px-4 py-2 rounded-md cursor-pointer hover:bg-darkBrown hover:text-white transition-all duration-300">
            1
          </button>
          <button className="bg-cream text-black px-4 py-2 rounded-md cursor-pointer hover:bg-darkBrown hover:text-white transition-all duration-300">
            2
          </button>
          <button className="bg-cream text-black px-4 py-2 rounded-md cursor-pointer hover:bg-darkBrown hover:text-white transition-all duration-300">
            3
          </button>
          <button className="bg-cream text-black px-4 py-2 rounded-md cursor-pointer hover:bg-darkBrown hover:text-white transition-all duration-300">
            Next
          </button>
        </div>
      </div>
      {/* promotion */}
      <div className="bg-cream py-10">
        {" "}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center lg:justify-items-start">
            {/* Item 1 */}
            <div className="flex flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="md:hidden">
                  <HugeiconsIcon
                    color="#242424"
                    size={40}
                    icon={ChampionIcon}
                  />
                </div>

                {/* Icon for Medium/Large Devices (Hidden on small screens) */}
                <div className="hidden md:block">
                  <HugeiconsIcon
                    color="#242424"
                    size={60}
                    icon={ChampionIcon}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg md:text-[25px] text-[#242424] font-bold leading-tight">
                  High Quality
                </h2>
                <p className="text-[#898989] text-sm md:text-[20px]">
                  crafted from top materials
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="md:hidden">
                  <HugeiconsIcon
                    color="#242424"
                    size={40}
                    icon={CheckmarkBadge02Icon}
                  />
                </div>

                {/* Icon for Medium/Large Devices (Hidden on small screens) */}
                <div className="hidden md:block">
                  <HugeiconsIcon
                    color="#242424"
                    size={60}
                    icon={CheckmarkBadge02Icon}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg md:text-[25px] text-[#242424] font-bold leading-tight">
                  Warranty Protection
                </h2>
                <p className="text-[#898989] text-sm md:text-[20px]">
                  over 2 years
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="md:hidden">
                  <HugeiconsIcon
                    color="#242424"
                    size={40}
                    icon={ContainerTruck02Icon}
                  />
                </div>

                {/* Icon for Medium/Large Devices (Hidden on small screens) */}
                <div className="hidden md:block">
                  <HugeiconsIcon
                    color="#242424"
                    size={60}
                    icon={ContainerTruck02Icon}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg md:text-[25px] text-[#242424] font-bold leading-tight">
                  Free Shipping
                </h2>
                <p className="text-[#898989] text-sm md:text-[20px]">
                  order over 150$
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <div className="md:hidden">
                  <HugeiconsIcon
                    color="#242424"
                    size={40}
                    icon={CustomerServiceIcon}
                  />
                </div>

                {/* Icon for Medium/Large Devices (Hidden on small screens) */}
                <div className="hidden md:block">
                  <HugeiconsIcon
                    color="#242424"
                    size={60}
                    icon={CustomerServiceIcon}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg md:text-[25px] text-[#242424] font-bold leading-tight">
                  24/7 Support
                </h2>
                <p className="text-[#898989] text-sm md:text-[20px]">
                  Dedicated support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
