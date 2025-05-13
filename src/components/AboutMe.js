import React from "react";

const AboutMe = () => (
  <div className="aboutme">
<img src={process.env.PUBLIC_URL + "/my-profile-pic.jpeg"} alt="Azan Khan" />
    <h3>Hello, I'm Azan Khan</h3>
    <div className="intro">
      <p>
        I am a web developer, business owner, and founder of DELIGHT TRADER LLC. ❤️ I specialize in creating dynamic and user-friendly web applications. I have a passion for learning new technologies and building solutions that make a difference.
      </p>
    </div>
    <hr />
  </div>
);

export default AboutMe;
