"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserWarning03Icon,
  Search01Icon,
  FavouriteIcon,
  ShoppingCart02Icon,
  Menu07Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed flex justify-between items-center p-5 w-full h-[100px] bg-white z-50">
        <div className="flex cursor-pointer">
          <img
            src="/images/logo.png"
            alt=""
            className="w-[50px] h-[32px] object-contain mt-2"
          />
          <p className="text-[34px] font-bold ml-1">Furniro</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[16px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul className="hidden md:flex md:gap-5 lg:gap-10">
          <li>
            <HugeiconsIcon icon={UserWarning03Icon} />
          </li>
          <li>
            <HugeiconsIcon icon={Search01Icon} />
          </li>
          <li>
            <HugeiconsIcon icon={FavouriteIcon} />
          </li>
          <li>
            <HugeiconsIcon icon={ShoppingCart02Icon} />
          </li>
        </ul>

        {/*  Menu Button */}
        <ul className="block md:hidden">
          <div
            onClick={() => setIsOpen(true)}
            className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-black hover:bg-gray-100"
          >
            <HugeiconsIcon icon={Menu07Icon} />
          </div>
        </ul>
      </nav>
      {/* -----------------------------------------------------  drawer start here ---------------------------------------- */}

      {/* --- Drawer Logic --- */}
      <div
        className={`relative z-[60] ${isOpen ? "visible" : "invisible"}`}
        aria-labelledby="drawer-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div
                className={`pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* Close Button */}
                <div
                  className={`absolute top-0 right-0 -ml-8 flex pt-4 pr-5 duration-500 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="relative rounded-md text-gray-400 hover:text-white focus:outline-none"
                  >
                    <span className="sr-only">Close panel</span>
                    <HugeiconsIcon
                      className="text-darkBrown"
                      icon={Cancel01Icon}
                    />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex h-full flex-col overflow-y-scroll bg-cream py-6 shadow-xl border-l border-white/10">
                  <div className="px-4 sm:px-6">
                    <h2
                      id="drawer-title"
                      className="text-3xl font-semibold text-darkBrown"
                    >
                      Furniro
                    </h2>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 text-darkBrown">
                    {/*  content  */}
                    <ul className="flex flex-col gap-6  text-[20px] text-center mt-10">
                      <li>
                        {" "}
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                    <ul className="flex gap-10 mt-20 justify-center ">
                      <li>
                        <HugeiconsIcon icon={UserWarning03Icon} />
                      </li>
                      <li>
                        <HugeiconsIcon icon={Search01Icon} />
                      </li>
                      <li>
                        <HugeiconsIcon icon={FavouriteIcon} />
                      </li>
                      <li>
                        <HugeiconsIcon icon={ShoppingCart02Icon} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
