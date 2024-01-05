import React, { useState } from "react";
import Collapse from "react-collapse";
import "./FicheCollapse.scss";
import arrowUpImage from "../../assets/arrow-up.png";
import arrowDownImage from "../../assets/arrow-down.png";

const CollapseComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fiche-collapse-container ${isOpen ? "open" : ""}`}>
      <div className="fiche-collapse-title" onClick={toggleCollapse}>
        <div>{title}</div>
        <div className="arrowback">
          <img
            src={isOpen ? arrowDownImage : arrowUpImage}
            alt={isOpen ? "Arrow Down" : "Arrow Up"}
          />
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="fiche-collapse-content">{content}</div>
      </Collapse>
    </div>
  );
};

export default CollapseComponent;
