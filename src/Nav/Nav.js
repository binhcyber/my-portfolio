import React, { useState } from "react";
import { AiFillHome, AiOutlineUser, AiFillMessage } from "react-icons/ai/index";
import { MdWorkOutline } from "react-icons/md/index";
import { BsFillBookmarkHeartFill } from "react-icons/bs/index";
import { act } from "@testing-library/react";
export default function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav className="fixed backdrop-blur-lg py-2 px-2 left-1/2 transform translate-x-center rounded-2xl  bg-nav max-w-min flex gap-3 bottom-12">
      <a
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : "#"}
        href="#"
      >
        <AiFillHome />
      </a>
      <a
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => {
          setActive("#experience");
        }}
        className={active === "#experience" ? "active" : ""}
        href="#experience"
      >
        <MdWorkOutline />
      </a>
      <a
        onClick={() => {
          setActive("#project");
        }}
        className={active === "#project" ? "active" : ""}
        href="#project"
      >
        <BsFillBookmarkHeartFill />
      </a>
      <a
        onClick={() => {
          setActive("#contact");
        }}
        className={active === "#contact" ? "active" : ""}
        href="#contact"
      >
        <AiFillMessage />
      </a>
    </nav>
  );
}
