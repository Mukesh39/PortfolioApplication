import React from "react";
import "../styles/Resume.css";

import MukeshResume from '../pdf/Mukesh_Frontend_Webdev_Resume_.pdf'

// import MukeshResume from "../pdf/MukeshResume.pdf"; 
// Replace with the actual path to your resume PDF file

import temp from "../assets/temp.png";
const Resume = () => {
  const handleDownload = () => {
     window.open(MukeshResume, "_blank"); // Open the resume PDF in a new tab for download
     //use when pdf is saved in project
  };
  return (
    <div className="resumePage">
      <h1 id="h1">Resume</h1>
      <div className="resume">
        {/* Display your resume content here */}

        {/* Add your resume sections, details, and styling */}
        {/* Download button */}
        <img src={temp} alt="imgres" />
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleDownload}
        >
          {/* <a href="https://www.linkedin.com/in/kumarmukesh95/overlay/1719400159980/single-media-viewer/?profileId=ACoAACHU54UB94DwCC0rwRHOiUKf_JbXPxfZGfQ">
            DOWNLOAD RESUME{" "}
          </a> */}

          Download
        </button>
      </div>
    </div>
  );
};
export default Resume;
