import React from 'react';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import {Link } from 'react-router-dom';
import '../styles/Home.css';
import plane from '../assets/plane.gif';
import Quotes from '../components/Quotes';
import Aboutme from '../components/Aboutme';
import { skillsInformation } from '../helpers/Data.js'
import {Button} from 'react-bootstrap';


function Home() {
  
console.log(skillsInformation);


  return (
    <div className='home'  >
      {/* About Section */}
      <div className="about">
      <img src={plane} alt="" srcset="" />
        <h2>Mukesh Kumar</h2>
        <div className="prompt">
      <p>I am Web Developer </p>

          <Link to="https://github.com/Mukesh39"><GitHub/></Link>
          <Link to="https://twitter.com/Mukesh_95_"><Twitter/></Link>
          <Link to="https://www.linkedin.com/in/kumarmukesh95/"><LinkedIn/></Link>
          <a href="mailto:muk.786422@gmail.com"><Email/> </a>
        </div>
      </div>
      <Aboutme/>
      <hr/>
      <div className='skillsSection' id='skills'>
      <h1>Skills</h1>
      <hr/>
      {skillsInformation.map((categoryObj, index) => (
        <div className='category' key={index}>
          <h2>{categoryObj.category}</h2>
          <div className='skillsa'>
            {categoryObj.skills.map((skill, skillIndex) => (
              <Button variant="primary" key={skillIndex}>{skill}</Button>
            ))}
          </div>
        </div>
      ))}
      </div>
     {/* This is Quotes sections */}
     <Quotes/>     
    </div>
  );
}

export default Home;





// Data information used for 
    //  {/* Skills Section */}
    //  <div className="skills">
    //  <h1>Skills</h1>
    //  <ol className="list">
    //    {/* Front-End Skills */}
    //    <li className="item">
    //      <h2>Front-End Skills </h2>
    //      <span>ReactJS, Redux, HTML, CSS, JavaScript(ES6+) , NPM, Git, GitHub , Bootstrap, Material-UI, Tailwind-CSS , Styled-Components , Semantic UI ,CSS-Animations </span>
    //      </li>   

    //    {/* Back-End Skills 
    //    <li className="item">
    //      <h2>Back-End</h2>
    //      <span>NodeJS</span>
    //    </li> */}

    //    {/* Language Skills */}
    //    <li className="item">
    //      <h2> Currently Backend Learning & Familiar with </h2>
    //      <span>API+REST-API , Express.Js , Nodejs </span>
    //    </li>


    //    {/* Language Skills */}
    //    <li className="item">
    //      <h2> Tools and Languages</h2>
    //      <span>JavaScript , C++, Vscode , Postman , ChatGpt , Google Bard , Atom ,Github , netlify etc </span>
    //    </li>
    //  </ol>
    //  </div> 



    // Write the Qualities Posses 
    // * Softskilsls 
    // *Problem solvihg
