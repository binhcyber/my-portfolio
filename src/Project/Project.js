import React from "react";
import AIRBNB from "../assets/airbnb.gif";
import MOVIE from "../assets/movie.gif";
import WEATHER from "../assets/weather.gif";
import MINIGAME from "../assets/Minigame.webp";
import NETFLIX from "../assets/netflixlogo.gif";
const data = [
  {
    id: 1,
    image: AIRBNB,
    title: "AIRBNB_CLONE",
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com/binhcyber/airbnb-web.git",
    liveDemo: "https://airbnb-clone-5kzc9dinz-binhcyber.vercel.app/",
  },
  {
    id: 2,
    image: NETFLIX,
    title: "NETFLIX_CLONE",
    desc: "This WEBSITE help people look for nice films, movies",
    github: "https://github.com/binhcyber/netflix_clone.git",
    liveDemo: "https://netflix-clone-97y0h4slo-binhcyber.vercel.app/",
  },
  {
    id: 3,
    image: WEATHER,
    title: "WEATHER",
    desc: "This WEBSITE help people look for accommodation",
    github: "https://github.com/binhcyber/weather-react-web.git",
    liveDemo: "https://weather-react-web.vercel.app/",
  },
  {
    id: 4,
    image: MOVIE,
    title: "MOVIE",
    desc: "This WEBSITE help people look for hot movie",
    github: "https://github.com/binhcyber/movie_project.git",
    liveDemo: "https://movie-web.surge.sh",
  },
  {
    id: 5,
    image: MINIGAME,
    title: "Rock-paper-scissors",
    desc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F690792-rock-paper-scissors-hand-icons&psig=AOvVaw22ASNJM7GYmYNtEXzPpbm6&ust=1654232677081000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDI243_jfgCFQAAAAAdAAAAABAI",
    desc: "This is Rock-paper-scissors game",
    github: "https://github.com/binhcyber/mini_game.git",
    liveDemo: "https://mini-game-blue.vercel.app/",
  },
];
export default function Project() {
  const renderProject = () => {
    return data.map(({ id, image, desc, github, liveDemo, title }) => {
      return (
        <div className="project_card" key={id}>
          <div>
            <img src={image} alt="airbnb" />
          </div>
          <h5 style={{ marginTop: "16px" }} className="text-center mt-2">
            {title}
          </h5>
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
