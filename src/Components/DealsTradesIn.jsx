import React from "react";
import "../App.css";

const DealsTradesIn = ({ item }) => {
  return (
    <div className="tradesIn">
      <div className="left">
        <div className="left-side">
          <div>Deal:</div>
          <div>Order:</div>
          <div>Id:</div>
        </div>
        <div className="rightOfLeft">
          <div className="date-p">{item?.deal_id}</div>
          <div className="date ">
            <div className="">{item?.order_id}</div>
          </div>
          <div className="date-p">{item?.user_id}</div>
        </div>
      </div>

      <div className="right">
        <div className="left-ofRight">
          <div>Swap:</div>
          <div>Charges:</div>
        </div>
        <div className="right-ofRight">
          <div>{item?.swap}</div>
          <div>{item?.commission.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default DealsTradesIn;
