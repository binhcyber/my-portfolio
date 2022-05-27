import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs/index";
export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skill i have</h5>
      <h2>My Experience</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10">
        <div className="experience_card">
          <h2 className="experience_title">Front-end Development</h2>
          <div className="grid grid-cols-2 rounded-3xl">
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
          </div>
        </div>
        <div className="experience_card">
          <h2 className="experience_title">Front-end Development</h2>
          <div className="grid grid-cols-2 rounded-3xl">
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
            <div>
              <div className="experience_skill">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
              </div>
              <h5 className="experience_text">Basic</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
