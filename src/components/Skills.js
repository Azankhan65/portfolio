import React from "react";

const Skills = () => (
  <div className="my-skills">
    <h4>My Skills</h4>
    <img src={process.env.PUBLIC_URL + "/my-skills.jpg"} alt="My Skills" />
    <h5>Design & Development</h5>
    <div className="about-skills">
      <p>
        I began my journey in coding at the age of 12, driven by the desire to build solutions for the future. Over the years, I’ve developed a passion for web development, and my goal is to become a proficient full-stack developer. ❤️
      </p>
      <img src={process.env.PUBLIC_URL + "/E-commerce (2).jpg"} alt="E-commerce" />
      <h5>E-commerce</h5>
      <p>
        I possess expertise in managing e-commerce platforms, optimizing online sales, and streamlining business operations to ensure growth and efficiency.
      </p>
    </div>
    <hr />
  </div>
);

export default Skills;
