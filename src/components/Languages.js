import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaPython,
  FaServer,
  FaCloud,
  FaUserShield,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiPostman,
  SiJquery,
  SiEjs
} from "react-icons/si";
import "../styles/languages.css";

const Languages = () => (
  <div className="languages">
    <h4>Programming Languages & Technologies I Know</h4>
    <ul>
      <li className="html"><FaHtml5 size={50} color="#E44D26" /><span>HTML</span></li>
      <li className="css"><FaCss3Alt size={50} color="#2965F1" /><span>CSS</span></li>
      <li className="bootstrap"><FaBootstrap size={50} color="#563D7C" /><span>Bootstrap</span></li>
      <li className="js"><FaJsSquare size={50} color="#F7DF1E" /><span>JavaScript</span></li>
      <li className="ts"><SiTypescript size={50} color="#007ACC" /><span>TypeScript</span></li>
      <li className="nodejs"><FaNodeJs size={50} color="#68A063" /><span>Node.js</span></li>
      <li className="react"><FaReact size={50} color="#1E88E5" /><span>React</span></li>
      <li className="python"><FaPython size={50} color="#306998" /><span>Python</span></li>
      <li className="express"><FaServer size={50} color="#000000" /><span>Express</span></li>
      <li className="api"><FaCloud size={50} color="#4CAF50" /><span>REST API</span></li>
      <li className="security"><FaUserShield size={50} color="#D32F2F" /><span>Auth</span></li>
      <li className="postgres"><SiPostgresql size={50} color="#336791" /><span>PostgreSQL</span></li>
      <li className="mysql"><SiMysql size={50} color="#00758F" /><span>MySQL</span></li>
      <li className="git"><SiGit size={50} color="#F1502F" /><span>Git</span></li>
      <li className="postman"><SiPostman size={50} color="#FF6C37" /><span>Postman</span></li>
      <li className="jquery"><SiJquery size={50} color="#0769AD" /><span>jQuery</span></li>
      <li className="ejs"><SiEjs size={50} color="#A91E50" /><span>EJS</span></li>
      <li className="vue">
        <img src="https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000" alt="Vue.js" width={50} height={50} />
        <span>Vue.js [Learning]</span>
      </li>
    </ul>
    <hr />
  </div>
);

export default Languages;
