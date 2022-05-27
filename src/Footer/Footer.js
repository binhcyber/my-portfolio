import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs/index";
import { AiFillInstagram } from "react-icons/ai/index";
export default function Footer() {
  return (
    <footer id="footer" className="w-full h-72 bg-primary mt-5 space-y-6">
      <h1 className="text-center">Portfolio</h1>
      <ul className="lg:flex md:flex block text-center justify-center items-center space-x-4">
        <li>
          <a href={"#"}>My Portfolio</a>
        </li>
        <li>
          <a href={"#about"}>About me</a>
        </li>
        <li>
          <a href={"#experience"}>Experience</a>
        </li>
        <li>
          <a href={"#project"}>Project</a>
        </li>
        <li>
          <a href={"#contact"}>Contact</a>
        </li>
      </ul>
      <div className="flex justify-center items-center space-x-3">
        <a
          href="https://www.facebook.com/profile.php?id=100005753327465"
          target={"_blank"}
        >
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/feed/" target={"_blank"}>
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/da_loi/" target={"_blank"}>
          <AiFillInstagram />
        </a>
      </div>
    </footer>
  );
}
