import React from 'react' ; 
import { useParams , Link } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectsList.jsx';
import  GitHubIcon  from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {

 const { id }  = useParams();
 const project = ProjectList[id];

  return (
    <div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image} alt=''/>
    <p> <b> Skills : </b>{project.skills}</p>


    <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </Link>



    </div>
  );
};

export default ProjectDisplay;