import React, { useState } from "react";
import data from "../components/data";

const Guide = () => {
  const [selectedDesc, setSelectedDesc] = useState("");
  const [active, setActive] = useState(false);            

  const handleTitleClick = (desc) => {
    setSelectedDesc(desc);
  };

  return (
    <div className="guide-container">
      <h1 className="guide-heading">Welcome to Sample Project</h1>
      <p className="guide-para">Explore Your Path to Knowledge and Expertise with Our Comprehensive Guides.</p>
      <div className="guide-list">
          {data.map((item, index) => (
            <p className="guide-list-title-id" key={index} onClick={() => handleTitleClick(item.desc)} >
              <span className="guide-list-id">{item.id}</span> <br /> {item.title}
            </p>
          ))}
      </div>
      {selectedDesc && (
        <div className="guide-desc-container">
          <p className="guide-title">Description:</p>
          <p className="guide-desc">{selectedDesc}</p>
        </div>
      )}
    </div>
  );
};

export default Guide;

