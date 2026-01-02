import React from "react";
import OurProductCard from "../OurProductCard";

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

function OurProducts() {
  return (
    <section className="my-10">
      <div className="container mx-auto px-4 font-poppins">
        <div className="text-center">
          <h1 className="text-xl md:text-[32px] font-bold text-lightBlack">
            Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-3 md:mt-10 gap-5">
            {products.map((product) => (
              <OurProductCard key={product.id} {...product} />
            ))}
          </div>
          <button className="mt-8 px-6 py-3  leading-[150%] text-darkBrown border text[16px] transition duration-300 cursor-pointer hover:bg-darkBrown hover:text-white border-darkBrown">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
