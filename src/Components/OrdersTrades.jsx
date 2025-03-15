import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const OrdersTrades = ({ item }) => {
  const { data } = useSelector((state) => state.data);
  const [pairs, setPairs] = useState([]);
  const date = moment(item?.time).format("YYYY-MM-DD HH:mm:ss");
  useEffect(() => {
    const newData = data?.data?.map((item) => {
      return item?.pair;
    });
    setPairs(newData);

    return () => {};
  }, []);

  return (
    <>
      <div className="main-tradeContainer">
        <div className="div">
          <div className="main-trades">
            <div>
              <b>{item?.pair}</b>,
            </div>

            <div className={item?.side == "BUY" ? "blue" : "red"}>
              {item?.trade_execution?.toLowerCase()}
            </div>
          </div>
          <div className="entry">
            <div>
              {item?.volume}/{item?.volume} at{" "}
              {item?.trade_execution?.toLowerCase()}
            </div>
          </div>
        </div>
        <div className="pandll">
          <div className="date-time">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {date}
            </div>
          </div>
          <div className="pandl">{item?.trade_status}</div>
        </div>
      </div>
    </>
  );
};

export default React.memo(OrdersTrades);
