import React from 'react' ; 
import { useParams , Link } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectsList.jsx';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

function ProjectDisplay() {
 const { id }  = useParams();
 const project = ProjectList[id];

  return (
    <div className='project'>
    <div className="projectDetails">
    <h1>{project.name}</h1>
    <p> <b> Skills : </b>{project.skills}</p>
    
  <div className="projectDetails2">
     <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
      <GitHubIcon />
      </Link>
    <h2> <b>Project Look </b></h2> <Link to={project.deployedLink} target="_blank" rel="noopener noreferrer">
     <AssistantDirectionIcon></AssistantDirectionIcon> </Link> 
     </div>

     </div>
    <div className="imgContainer">
     <img src={project.image} alt=''/>
     </div>

    </div>
    
  );
};

export default ProjectDisplay;