import React from "react";
import CV from "../assets/CV.pdf";
export default function CTA() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <a href={CV} download className="btn">
        Download
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}
