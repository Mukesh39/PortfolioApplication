import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <h3>You can find me everywhere ! </h3>
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
          <Email />
        </a>
      </div>
      <div className="name">
        <h3>Mukesh Kumar</h3>
      </div>
      <div className="myInfo" id="myinfo">
        <p> &copy; 2023 Mukesh Kumar No copyright issues. </p>
        <p> Feel Free To copy. If You Need any help ,</p>
        <p>Ping me !</p>
      </div>
    </div>
  );
}

export default Footer;
