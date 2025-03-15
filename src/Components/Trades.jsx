import React from "react";
import "../App.css";
import moment from "moment";

const Trades = ({ items }) => {
  const date = moment(items?.time).format("YYYY-MM-DD HH:mm:ss");

  return (
    <>
      <div className="main-tradeContainer">
        <div className="div">
          <div className="main-trades">
            <div>
              <b>{items?.pair}</b>,
            </div>

            <div className={items?.side == "BUY" ? "blue" : "red"}>
              {items?.side}
            </div>
            <div className={items?.side == "BUY" ? "blue" : "red"}>
              {items?.volume}
            </div>
          </div>
          <div className="entry">
            <div>{items?.entry_price?.toFixed(2)}</div>
            <span>→</span>
            <div>{items?.close_price?.toFixed(2)}</div>
          </div>
        </div>
        <div className="pandll">
          <div className="date-time">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {date}
            </div>
          </div>
          <div className={`"pandl" ${items?.profit < 0 ? "red" : "blue"}`}>
            {items?.profit?.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trades;
