import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import moment from "moment";

const OrdersTradesIn = ({ item }) => {
  const { data } = useSelector((state) => state.data);
  const date = moment(item?.time).format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className="tradesIn">
      <div className="left">
        <div className="left-side">
          <div>{date}</div>
          <div>S/L:</div>
          <div>T/P:</div>
        </div>
        <div className="rightOfLeft">
          <div className="date-p">{item?.sl}</div>
          <div className="date-p">{item?.tp}</div>
        </div>
      </div>

      <div className="right">
        <div className="left-ofRight">
          <div>ID:</div>
          <div>:</div>
        </div>
        <div className="right-ofRight">
          <div>{item.order_id}</div>

          <div>#{item?.user_id}</div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTradesIn;
