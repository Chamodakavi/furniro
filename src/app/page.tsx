import Image from "next/image";
import "./globals.css";
import Hero from "@/component/sections/Hero";
import RangeSec from "@/component/sections/RangeSec";
import OurProducts from "@/component/sections/OurProducts";
import RoomInspiration from "@/component/sections/RoomInspiration";
import Share from "@/component/sections/Share";

export default function Home() {
  return (
    <>
      <Hero />
      <RangeSec />
      <OurProducts />
      <RoomInspiration />
      <Share />
    </>
  );
}
