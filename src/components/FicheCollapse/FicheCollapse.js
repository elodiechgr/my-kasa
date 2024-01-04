import React, { useState } from "react";
import Collapse from "react-collapse";
import "./FicheCollapse.scss";

const CollapseComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fiche-collapse-container">
      <div className="fiche-collapse-title" onClick={toggleCollapse}>
        {title}
      </div>
      <Collapse isOpened={isOpen}>
        <div className="fiche-collapse-content">{content}</div>
      </Collapse>
    </div>
  );
};

export default CollapseComponent;
