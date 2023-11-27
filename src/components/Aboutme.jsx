import React from 'react';
import '../styles/Aboutme.css'; // Import CSS file for styling
import Mukesh from '../assets/Mukesh.png';
import GitHub from '../assets/icons8-github.gif';
import twitter from '../assets/icons8-twitter.gif';
import LinkedIn from '../assets/icons8-linkedin-circled.gif'; 

const Aboutme = () => {
  return (
    <div className="about-me"  id='Aboutme'>

    <div className="aboutmeSec1">
      
      
            <div className="leftSec">
                  <div className="image-container">
                    <img src={Mukesh} alt="My Image" />
                  </div>
                    <div className="social-icons">
                          {/* Replace the links with your social media profiles */}
                          <a href="#"><img src="
                          "/></a>
                          <a href="https://github.com/Mukesh39"><img src={GitHub} alt="" /></a>
                          <a href="https://twitter.com/Mukesh_95_"><img src={twitter} alt="" /></a>
                          <a href="https://www.linkedin.com/in/kumarmukesh95/"><img src={LinkedIn} alt="" srcset="" /></a>
                    </div>
            </div>

            <div className="rightsec">
                <h1>About Me</h1>
                <p>"Hello, I'm Mukesh Kumar, a passionate web developer. My love for technology shines through the projects and work I've undertaken. I firmly believe that technology serves as the key to solving the world's problems. I aspire to play a significant role in this field." 
                </p>
            </div>
      </div>
      <hr />

  
      <div className="skills">
        
          <div className="skill"> 
              <h2>7000+</h2>
              <p>Lines of Code </p>
              </div>

              <div className="skill"> 
              <h2>200+</h2>
              <p>Cups of Cofee Drunk</p>
              </div>
              
              <div className="skill"> 
              <h2>25+</h2>
              <p>Github Repositories of Projects Completed with Projects and Learning </p>
              </div>
              
        </div>
      </div>
  );
};

export default Aboutme;