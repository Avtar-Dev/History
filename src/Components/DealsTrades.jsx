import React from "react";
import "../App.css";
import moment from "moment";

const DealsTrades = ({ item }) => {
  const date = moment(item?.time).format("YYYY-MM-DD HH:mm:ss");
  return (
    <>
      <div className="main-tradeContainer">
        <div className="div">
          <div className="main-trades">
            <div>
              <b>{item?.pair}</b>,
            </div>
            <div className={item?.side == "BUY" ? "blue" : "red"}>
              {item?.side},
            </div>
            <div>out</div>
          </div>
          <div className="entry">
            <div>{item?.volume}</div>
            <div>at</div>
            <div>{item?.entry_price?.toFixed(2)}</div>
          </div>
        </div>
        <div className="pandll">
          <div className="date-time">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {date}
            </div>
          </div>
          <div className={`"pandl" ${item?.profit < 0 ? "red" : "blue"}`}>
            {item?.profit?.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsTrades;
