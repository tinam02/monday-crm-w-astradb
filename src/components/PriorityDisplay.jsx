import React from "react";

const PriorityDisplay = ({ priority }) => {

  return (
    <div className="priority-display">
      <div className="star-container">
        <h3 style={{ color: priority >= 1 ? "yellow" : "" }}>★</h3>
        <h3 style={{ color: priority >= 2 ? "yellow" : "" }}>★</h3>
        <h3 style={{ color: priority >= 3 ? "yellow" : "" }}>★</h3>
        <h3 style={{ color: priority >= 4 ? "yellow" : "" }}>★</h3>
        <h3 style={{ color: priority >= 5 ? "yellow" : "" }}>★</h3>
      </div>
    </div>
  );
};

export default PriorityDisplay;
