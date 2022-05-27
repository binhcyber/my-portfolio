import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs/index";
export default function HeaderSocial() {
  return (
    <div className="flex flex-col items-center gap-5 absolute left-0 bottom-12">
      <a
        href="https://www.facebook.com/profile.php?id=100005753327465"
        target={"_blank"}
      >
        <BsFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/phan-binh-35284123a/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/da_loi/" target={"_blank"}>
        <BsInstagram />
      </a>
    </div>
  );
}
