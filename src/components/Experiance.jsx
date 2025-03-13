import React, { useEffect, useState } from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import node from "../../public/node.png";
import bootstrap from "../../public/bootstrap.png";
import Tailwind from "../../public/Tailwind CSS.png";
import react from "../../public/reactjs.png";
import next from "../../public/next.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML", percent: 80 },
    { id: 2, logo: css, name: "CSS", percent: 75 },
    { id: 3, logo: javascript, name: "JavaScript", percent: 60 },
    { id: 4, logo: bootstrap, name: "Bootstrap", percent: 80 },
    { id: 5, logo: Tailwind, name: "Tailwind CSS", percent: 80 },
    { id: 6, logo: react, name: "React JS", percent: 70 },
    { id: 7, logo: next, name: "Next JS", percent: 80 },
    { id: 8, logo: node, name: "Node JS", percent: 72 },
  ];

  const [progress, setProgress] = useState(cardItem.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience-section");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          cardItem.forEach((item, index) => {
            let currentProgress = 0;
            const interval = setInterval(() => {
              setProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = Math.min(currentProgress, item.percent);
                return newProgress;
              });
              currentProgress += 2;
              if (currentProgress > item.percent) {
                clearInterval(interval);
              }
            }, 20);
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="experience-section"
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16  bg-[#78737315] py-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">Experience</h1>
        <p>
          I've more than 6 months of experience at Skyy Skill Academy, working on real-world problem-solving and innovative solutions in the technologies below. I have also been working at Beezfusion Tech as a web developer (internship) using these tools.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-10">
          {cardItem.map(({ id, logo, name, percent }, index) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-lg md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[80px] h-[80px] rounded-full" alt={name} />
              <div className="mt-2 text-lg font-semibold">{name}</div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-300 h-3 rounded-full transition-all ease-in-out duration-[2000ms]"
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
              <div className="text-center mt-1 font-semibold">{progress[index]}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
