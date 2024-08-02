import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectsList";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              key={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
