import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectsList.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";

function ProjectDisplay() {
  const { id } = useParams();
  //project item and projects and Projecdisplay all id should be same

  // Destructure 'id' from the parameters

  // Now you can use 'id' to fetch or display project details

  console.log(id);
  // This will log the 'id' parameter from the URL

  const project = ProjectList[id];

  if (!project) {
    console.error(`Project with id ${id} not found in ProjectList.`);
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      <div className="projectDetails">
        <h1>{project.name}</h1>
        <p>
          {" "}
          <b> Skills : </b>
          {project.skills}
        </p>

        <div className="projectDetails2">
          <h2>
            <b> Project Look </b>
          </h2>

          <h2 className="github">
            {" "}
            <Link
              to={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="iconGithub" />
            </Link> github
          </h2>

          <h2 className="netlify">
            <Link
              to={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AssistantDirectionIcon   className="iconnetlify"/>
            </Link> Deployed
          </h2>
        </div>
      </div>
      <div className="imgContainer">
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}

export default ProjectDisplay;
