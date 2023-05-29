import React from 'react';
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      {/* About Section */}
      <div className="about">
        <h2> Hi, My Name is Mukesh </h2>
        <div className="prompt">
          <p>A Software Developer with a Passion for Learning and Creating</p>
          <GitHub/>
          <Twitter/>
          <LinkedIn/>
          <Email/>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          {/* Front-End Skills */}
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, JavaScript, NPM, Bootstrap, MaterialUI, TailwindCSS, StyledComponents</span>
          </li>

          {/* Back-End Skills */}
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS</span>
          </li>

          {/* Language Skills */}
          <li className="item">
            <h2>Languages</h2>
            <span>C++, JavaScript, HTML, Java, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
