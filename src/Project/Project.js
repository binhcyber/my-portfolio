import React from "react";
import AIRBNB from "../assets/airbnb.gif";
import MOVIE from "../assets/movie.gif";
import WEATHER from "../assets/weather.gif";
const data = [
  {
    id: 1,
    image: AIRBNB,
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com/binhcyber/airbnb-web.git",
    liveDemo: "https://airbnb-clone-web.surge.sh/",
  },
  {
    id: 2,
    image: MOVIE,
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com/binhcyber/movie_project.git",
    liveDemo: "https://movie-web.surge.sh",
  },
  {
    id: 3,
    image: WEATHER,
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com/binhcyber/weather-react-web.git",
    liveDemo: "https://weather-react-web.vercel.app/",
  },
  {
    id: 4,
    image: AIRBNB,
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    id: 5,
    image: AIRBNB,
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
];
export default function Project() {
  const renderProject = () => {
    return data.map(({ id, image, desc, github, liveDemo }) => {
      return (
        <div className="project_card" key={id}>
          <div>
            <img src={image} alt="airbnb" />
          </div>
          <p className="project_desc">{desc}</p>
          <div className="space-x-2">
            <a href={github} alt={github} target="_blank" className="btn">
              Github
            </a>
            <a
              href={liveDemo}
              alt={liveDemo}
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <section id="project">
      <h5>Get to explore</h5>
      <h2>My Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:ml-0 md:ml-8 ml-16 ">
        {renderProject()}
      </div>
    </section>
  );
}
