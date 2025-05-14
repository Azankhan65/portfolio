import React from "react";

const Skills = () => (
  <div className="my-skills">
    <h4>My Skills</h4>
    <img src={process.env.PUBLIC_URL + "/my-skills.jpg"} alt="My Skills" />
    <h5>Design & Development</h5>
    <div className="about-skills">
      <p>
        <p>
          I am a full-stack developer with a passion for building solutions that
          drive the future. Over the years, I’ve honed my skills in both
          front-end and back-end development, and I’m dedicated to delivering
          high-quality web applications. ❤️
        </p>
      </p>
      <img
        src={process.env.PUBLIC_URL + "/E-commerce (2).jpg"}
        alt="E-commerce"
      />
      <h5>E-commerce</h5>
      <p>
        I possess expertise in managing e-commerce platforms, optimizing online
        sales, and streamlining business operations to ensure growth and
        efficiency.
      </p>
    </div>
    <hr />
  </div>
);

export default Skills;
