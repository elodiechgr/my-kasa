import React, { useState } from "react";
import "./Collapse.scss";
import arrowUpImage from "../../assets/arrow-up.png";
import arrowDownImage from "../../assets/arrow-down.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className="arrowback">
          <img
            src={isOpen ? arrowDownImage : arrowUpImage}
            alt={isOpen ? "Arrow Down" : "Arrow Up"}
          />
        </div>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collapse;
