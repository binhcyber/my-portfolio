import React from "react";
import AVATAR from "../assets/Avatar4.jpg";
import { FaAward } from "react-icons/fa/index";
export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-20">
        <div className="about_avatar">
          <img src={AVATAR} alt="me" className="about_image" />
        </div>
        <div className="h-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-8 my-0 mx-auto">
            <div className="about_card">
              <FaAward />
              <h5>4 English Skills</h5>
              <small>Basic</small>
            </div>
            <div className="about_card">
              <FaAward />
              <h5>Self-discipline</h5>
              <small>High</small>
            </div>
            <div className="about_card">
              <FaAward />
              <h5>Self-study</h5>
              <small>High</small>
            </div>
          </div>
          <p className="my-5 md:text-center sm:text-center">
            I'm often praised for my creativity and independent working skills.
            I always put my heart and soul into every single website that I
            develop. I guess that's all I have to share about myself. Thank you
            for reading!
          </p>
          <div className="text-center">
            <a
              className="btn btn-primary md:text-center sm:text-center"
              href="#contact"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
