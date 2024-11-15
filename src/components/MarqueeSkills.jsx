import React from "react";
import { skillsInformation } from "../helpers/Data";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const MarqueeSkills = () => {
  return (
    <>
      <div className="skillsSection" id="skills">
        <h1>Skills</h1>
        <hr />
        {skillsInformation.map((categoryObj, index) => (
          <div className="category" key={index}>
            <h2>{categoryObj.category}</h2>
            <div className="skillsa">
              {categoryObj.skills.map((skill, skillIndex) => (
                <Button variant="primary" key={skillIndex} style={{ margin: "5px" }}>
                  <Marquee gradient={false} speed={30}>
                    {skill}
                  </Marquee>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarqueeSkills;
