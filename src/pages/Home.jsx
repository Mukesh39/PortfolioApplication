import React from 'react';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      {/* About Section */}
      <div className="about">
        <h2> Hi, My Name is Mukesh Kumar </h2>
        <div className="prompt">
          <p>Passionate front-end developer skilled in HTML, CSS, and JavaScript, seeking opportunities to contribute to innovative web projects and learn from experienced professionals.</p>

          <Link to="https://github.com/Mukesh39"><GitHub/></Link>
          <Link to="https://twitter.com/Mukesh_95_"><Twitter/></Link>
          <Link to="https://www.linkedin.com/in/kumarmukesh95/"><LinkedIn/></Link>
          <a href="mailto:muk.786422@gmail.com"><Email/></a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          {/* Front-End Skills */}
          <li className="item">
            <h2>Front-End Skills </h2>
            <span>ReactJS, Redux, HTML, CSS, JavaScript, NPM, Git, GitHub , Bootstrap, MaterialUI, TailwindCSS</span>
          </li>

          {/* Back-End Skills 
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS</span>
          </li> */}

          {/* Language Skills */}
          <li className="item">
            <h2> Tools and Languages</h2>
            <span>C++ , JavaScript , Vscode , Postman , ChatGpt , Google Bard </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
