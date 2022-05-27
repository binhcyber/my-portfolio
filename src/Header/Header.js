import React from "react";
import CTA from "./CTA";
import ME from "../assets/Avatar1.jpg";
import HeaderSocial from "./HeaderSocial";
export default function Header() {
  return (
    <header className="h-screen overflow-hidden pt-24" id="#">
      <div className="lg:text-center md:text-center text-center overflow-hidden relative w-full h-full">
        <h5>Hello, I'm</h5>
        <h1>Phan Thanh Binh</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="overflow-hidden lg:w-80 lg:h-height-img md:w-102 md:h-height-img-md w-72 h-height-img-sm absolute left-0 transform lg:translate-x-4/5 md:translate-x-1/2 translate-x-sm lg:top-48 md:top-48 top-44">
          <img src={ME} alt={"me"} className="rounded-tl-3xl rounded-tr-3xl" />
        </div>
        <a
          href="#contact"
          className="absolute bottom-20 tracking-widest lg:right-0 md:-right-8 -right-12 transform rotate-90"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
}
