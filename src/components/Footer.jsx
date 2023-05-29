import { Email, GitHub, LinkedIn , Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'
import React from 'react';

function Footer() {
  return (
    <div className="footer">
    <div className='socialMedia'>
         <GitHub/>
        <Twitter/>
        <LinkedIn/>
        <Email/>
    </div>
    <p> &copy; 2023 Mukesh Kumar </p>
    </div>
  );
};

export default Footer;