import React from "react";
import java from "../../public/java.png";
import python from "../../public/book.jpeg";
import mongoDB from "../../public/beezinfo.png";
import express from "../../public/homso-main-logo1.png";
import reactjs from "../../public/hotel.jpg";
import nodejs from "../../public/WhatsApp Image 2024-09-17 at 19.35.29_478e509d.jpg";
import github from "../../public/github.png";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "Beezinfo",
      url: "https://www.beezinfo.com",
      content:
        " a dynamic website providing business insights, tech news, service listing",
    },

    {
      id: 2,
      logo: express,
      name: "Homso.co.in",
      url: "https://www.homso.co.in",
      content:
        " Homso is here to provide compassionate, professional  care for your loved ones",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Hotel Restaurant project",
      url: "https://hotel-restaurant-project.vercel.app/",
      content:
        " Enjoy a delightful dining experience with delicious cuisine, warm hospitality",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Personal Portfolio",
      url: "https://portfolio-qpy4.vercel.app/",
      content:
        " Welcome to my portfolio! I’m a passionate React Developer with a keen eye for crafting modern,",
    },
    {
      id: 5,
      logo: python,
      name: "Book Store App",
      url: "https://www.bookstoreapp.com",
      content:
        " Welcome to BookNest, the ultimate destination for book lovers!",
    },
    {
      id: 6,
      logo: github,
      name: "Github",
      url: "https://github.com/dashboard",
      content:
        " a dynamic website providing business insights, tech news, service listing",
    },
  ];

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-5">Project</h1>
          <span className="underline font-semibold">Featured Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 text-center mt-10">
          {cardItem.map(({ id, logo, name, url, content }) => (
            <div
              className="md:w-[auto] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-95 duration-300"
              key={id}
            >
              <div className="flex place-content-center w-full">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                  alt=""
                />
              </div>

              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{content}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
