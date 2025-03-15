import React from "react";
import "../App.css";
import moment from "moment";

const TradesIn = ({ items }) => {
  const date = moment(items?.time).format("YYYY-MM-DD HH:mm:ss");
  return (
    <div className="tradesIn">
      <div className="left">
        <div className="left-side">
          <div>S/L:</div>
          <div>Open:</div>
          <div>Id:</div>
        </div>
        <div className="rightOfLeft">
          <div className="date-p">{items?.sl}</div>
          <div className="date ">
            <div className="">{date}</div>
          </div>
          <div className="date-p">{items?.order_id}</div>
        </div>
      </div>

      <div className="right">
        <div className="left-ofRight">
          <div>T/P:</div>
          <div>Swap:</div>
          <div>Commission:</div>
        </div>
        <div className="right-ofRight">
          <div>{items?.tp}</div>
          <div>{items?.swap}</div>
          <div>{items?.commission.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default TradesIn;
