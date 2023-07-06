import React from 'react';
import '../styles/Resume.css'
import m from '../pdf/m.pdf'; // Replace with the actual path to your resume PDF file
import temp from '../assets/temp.png'
const Resume = () => {
  const handleDownload = () => {
    window.open(m, '_blank'); // Open the resume PDF in a new tab for download
  };
  return (
    <div>
    <h1 id = "h1">Resume</h1>
    <div className='resume'>
      {/* Display your resume content here */}
      
      {/* Add your resume sections, details, and styling */}
      {/* Download button */}
      <img src = {temp} alt='imgres'/>
      <button  type="button" class="btn btn-primary btn-lg"  onClick={handleDownload}>DOWNLOAD RESUME</button>
    </div>
    </div>
  );
};
export default Resume;