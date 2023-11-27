import React, { useEffect, useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {


const [expandNavbar ,  setExpandnavabar] = useState(false);

const location = useLocation();


useEffect(()=>{
  setExpandnavabar(false);
} , [location]) ; 



  return (
    <div className="navbar"  id = {expandNavbar ? "open" : "close"}>
    <div className="toggleButton">
         <button onClick={()=>{
          setExpandnavabar((prev)=> !prev);
         }}
         > {<ReorderIcon/>}   </button>
    </div>

    <div className="links">
        <Link to = "/">Home</Link>
        <a href="#skills">Skills</a>
        <Link to = "/projects">Projects</Link>
        <Link to = "/experience">Experience</Link>
        <Link to = "/resume">Resume</Link>
       
        <a href="#Aboutme">About me</a>
       
    </div>
    </div>
  ); 
}

export default Navbar ; 