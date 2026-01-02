"use client";

import {
  FavouriteIcon,
  GitCompareIcon,
  Share08Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState, useEffect, useRef } from "react";

interface ProductProps {
  id: number;
  name: string;
  desc: string;
  image: string;
  pricediscount: string;
  price: string;
  additional: string;
}

function OurProductCard({
  id,
  name,
  desc,
  image,
  pricediscount,
  price,
  additional,
}: ProductProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only run this logic on mobile screens (e.g., width < 768px)
        if (window.innerWidth < 768) {
          if (entry.isIntersecting) {
            setShowOverlay(true); // Card is in view -> Show Overlay
          } else {
            setShowOverlay(false); // Card is out of view -> Hide Overlay
          }
        }
      });
    }, observerOptions);

    // observing
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup when component unmounts
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-lightWhite shadow-md font-poppins text-lightBlack group overflow-hidden transition-all duration-300"
      // click to toggle overlay
      onClick={() => setShowOverlay(!showOverlay)}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[400px] md:h-[300px] object-cover"
      />

      <div className="mt-4 px-4 pb-4 text-left">
        <h2 className="text-lg md:text-[24px] font-semibold leading-[120%]">
          {name}
        </h2>
        <p className="text-[#898989] text-sm md:text-base leading-[150%] mt-1">
          {desc}
        </p>
        <div className="flex items-center mt-2 gap-3">
          <span className="text-lg font-bold">Rp {pricediscount}</span>
          <span className="text-[#B0B0B0] text-sm line-through">{price}</span>
        </div>
      </div>

      {/* --- overlay --- */}
      <div
        className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center 
        transition-all duration-500 z-10 
        ${
          showOverlay
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
        }`}
      >
        <button className="bg-white text-[#B88E2F] py-3 px-10 hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
          Add to cart
        </button>
        <ul className="block lg:flex flex-wrap mx-0 md:mx-2 lg:mx-2 text-white gap-5 my-10 text-[14px]">
          <li className="flex py-2 lg:py-0">
            <span className="mr-2">
              <HugeiconsIcon icon={Share08Icon} />
            </span>{" "}
            Share
          </li>
          <li className="flex py-2 lg:py-0">
            <span className="mr-2">
              <HugeiconsIcon icon={GitCompareIcon} />
            </span>{" "}
            Compare
          </li>
          <li className="flex py-2 lg:py-0">
            <span className="mr-2">
              <HugeiconsIcon icon={FavouriteIcon} />
            </span>{" "}
            Like
          </li>
        </ul>
      </div>

      {additional && (
        <div
          className={`
            absolute top-5 right-5 z-1
            flex justify-center items-center
            w-12 h-12 rounded-full text-xs font-medium 
            ${
              additional === "new"
                ? "bg-[#2EC1AC] text-white"
                : "bg-[#E97171] text-white"
            }
          `}
        >
          {additional}
        </div>
      )}
    </div>
  );
}

export default OurProductCard;
