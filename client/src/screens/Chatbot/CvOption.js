import React from "react";

import "./CvOption.css";

const CvOptions = (props) => {
  const options = [
    { text: "Complaint", handler: props.actionProvider.Complain, id: 1 },
    { text: "Complaint status", handler: props.actionProvider.Complainstatus, id: 2 },
    { text: "Issue not resolved", handler: props.actionProvider.Issuestatus, id: 3 },
    { text: "Feedback", handler: props.actionProvider.Feedback, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="cv-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="cv-options-container">{optionsMarkup}</div>;
};

export default CvOptions;