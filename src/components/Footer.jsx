import { Email, GitHub, LinkedIn , Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'
import React from 'react';

function Footer() {
  return (
    <div className="footer">
    <div className='socialMedia'>
    <Link to="https://github.com/Mukesh39"><GitHub/></Link>
    <Link to="https://twitter.com/Mukesh_95_"><Twitter/></Link>
    <Link to="https://www.linkedin.com/in/kumarmukesh95/"><LinkedIn/></Link>
    <a href="mailto:muk.786422@gmail.com"><Email/></a>
    </div>
    <p> &copy; 2023 Mukesh Kumar </p>
    </div>
  );
};

export default Footer;