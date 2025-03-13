import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-[#78737315]"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">About</h1>
        <p>
          Hello, I'm Gyana Priyadarsan Singh, a passionate Web developer with a
          keen eye for MERN Stack . With a background in IT, I strive to create
          impactful and visually stunning Software solutions that leave a
          lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="mt-2">
          <li className="text-xl">
            1. Post Graduate in Full Stack developer with Mern stack (Mar-2024
            to Sep-2024)
          </li>
          <p>Skyy Skill Acadamy, BBSR</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">
            2. Master In Computer Application(MCA) (2022 to 2024)
          </li>
          <p>Biju Pattnaik University And Technology (BPUT), Roulkela</p>
          <p>CGPA: 7.4</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">3. Graduation In BSC (2017 to 2020)</li>
          <p>Berhampur University Berhampur</p>
          <p>CGPA: 7.2</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">
            4. +2 Science (Intermediate) (2015 to 2017)
          </li>
          <p>Council Higher Secondary Education (CHSE), Odisha</p>
          <p>61%</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">5. 10th </li>
          <p>Board Of Secondary Education, Odisha </p>
          <p>CGPA: 65%</p>
        </ul>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <p>
          {" "}
          Html, CSS, JavaScript, Bootstrap, Tailwind, React, Next.js, MongoDB,
          Node.js, Express, GitHub, GitLab .
        </p>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <ul className="leading-[2.5rem]">
          <li className="text-xl" >Web Developer (Internship), Beezfusin Pvt.Ltd, Bhubaneswar, Odisha
          Sep 2024– Still Now</li>
          <p>◦ Developed and maintained full-stack web applications using Html, CSS, Javascript,Bootstrap,Tailwind, React.js, Next.js MongoDB, Express.js, and Node.js.</p>
          <p>◦ Designed and implemented RESTful APIs and integrated third-party services for enhanced functionality.</p>
          <p> ◦ Built responsive and dynamic UI components with React.js, Built reusable and dynamic UI components
          with Tailwind CSS, Chakra UI, and Material UI for a seamless user experience.</p>
          <p> ◦ Implemented authentication and authorization (JWT, Auth, NextAuth.js, bcrypt) for secure access control.
          Deployed applications on Vercel, AWS, and Docker, ensuring scalability and efficiency.</p>
          <p> ◦ Integrated MongoDB (Mongoose ORM) for efficient database management and optimized queries for scala
          bility.</p>
        </ul>

        <br />
        <br />

        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
