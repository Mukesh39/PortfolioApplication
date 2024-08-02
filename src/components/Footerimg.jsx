import React from "react";
import foot from "../assets/foot.jpg";
import "../styles/Footerimg.css";

function Footerimg() {
  return (
    <div className="container">
      <div className="imgBottom">
        <img src={foot} alt="footer" />
      </div>
    </div>
  );
}

export default Footerimg;
