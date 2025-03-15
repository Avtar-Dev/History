import React from "react";
import "../App.css";

const HistoryHeader = ({ title, value }) => {
  return (
    <div className="deals">
      <div className="title">{title}</div>
      <div className="dots">
        ............................................................................................
      </div>
      <div className="value">{value}</div>
    </div>
  );
};

export default HistoryHeader;
