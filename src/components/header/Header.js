import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="head-company-name">
        <p>JavaTechDen</p>
      </div>

      <div className="head-company-desc">
        <p>
          Welcome to JavaTechDen, where a dedicated team of professionals works
          together to bring innovation, creativity and expertise to software
          industry, get to know the individuals who make our company thrive.
        </p>
      </div>
      <div>
        <svg width="200" height="100">
          <line
            x1="10"
            y1="50"
            x2="190"
            y2="50"
            stroke="indigo"
            stroke-dasharray="5 5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
