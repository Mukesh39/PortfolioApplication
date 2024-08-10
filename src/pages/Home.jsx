import React from "react";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import plane from "../assets/plane.gif";
import Quotes from "../components/Quotes";
import Aboutme from "../components/Aboutme";
import { skillsInformation } from "../helpers/Data.js";
import { Button } from "react-bootstrap";
import ContactForm from "../components/ContactForm.js";

function Home() {
  console.log(skillsInformation);

  return (
    <div className="home">
      {/* About Section */}
      <div className="about">
        <img src={plane} alt="" srcset="" />
        <h2>Mukesh Kumar</h2>
        <div className="prompt">
          <p>I am Web Developer </p>

          <Link to="https://github.com/Mukesh39">
            <GitHub />
          </Link>
          <Link to="https://twitter.com/Mukesh_95_">
            <Twitter />
          </Link>
          <Link to="https://www.linkedin.com/in/kumarmukesh95/">
            <LinkedIn />
          </Link>
          <a href="mailto:muk.786422@gmail.com">
            <Email />{" "}
          </a>
        </div>
      </div>
      <Aboutme />
      <hr />
      <div className="skillsSection" id="skills">
        <h1>Skills</h1>
        <hr />
        {skillsInformation.map((categoryObj, index) => (
          <div className="category" key={index}>
            <h2>{categoryObj.category}</h2>
            <div className="skillsa">
              {categoryObj.skills.map((skill, skillIndex) => (
                <Button variant="primary" key={skillIndex}>
                  {skill}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* This is Quotes sections */}
      <Quotes />
      <ContactForm />
    </div>
  );
}

export default Home;
