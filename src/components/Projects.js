import React from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Todos List",
    link: "https://azankhan65.github.io/todios/",
    description: "A React-based app to manage daily tasks with local storage.",
    image: process.env.PUBLIC_URL + "/images/todos.png",
  },
  {
    title: "Currency Converter",
    link: "https://azankhan65.github.io/Currency-converter/",
    description: "Convert currencies in real time with live exchange rates.",
    image: process.env.PUBLIC_URL + "/images/currency.png",
  },
  {
    title: "Budget Tracker",
    link: "https://azankhan65.github.io/budget-tracker/",
    description: "Track your expenses and manage your monthly budget easily.",
    image: process.env.PUBLIC_URL + "/images/budget.png",
  },
  {
    title: "Grocery List",
    link: "https://azankhan65.github.io/grocery-list/",
    description: "Add, remove, and check off grocery items quickly.",
    image: process.env.PUBLIC_URL + "/images/grocery.png",
  },
  {
    title: "Unit Converter",
    link: "https://azankhan65.github.io/unit-converter/",
    description: "Converts between various units like length, mass, and temperature etc.",
    image: process.env.PUBLIC_URL + "/images/unit.png",
  },
  {
    title: "Tic Tac Toe Game",
    link: "https://azankhan65.github.io/tic-tac-toe/",
    description: "A fun and interactive Tic Tac Toe game.",
    image: process.env.PUBLIC_URL + "/images/tictactoe.png",
  },
  {
    title: "Trivia Quiz Game",
    link: "https://azankhan65.github.io/quiz/",
    description: "A fun Quiz Game",
    image: process.env.PUBLIC_URL + "/images/quiz.png",
  },
];


const Projects = () => (
  <div className="projects">
    <h4>My Projects</h4>
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
    <hr />
  </div>
);

export default Projects;
