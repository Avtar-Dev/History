import React, { useMemo } from "react";
import HistoryHeader from "../../../Components/HistoryHeader";
import "../../../App.css";
const OrdersTop = ({ data }) => {
  const filtered = useMemo(() => {
    return data?.filter((item) => {
      return item?.trade_status == "FILLED";
    }).length;
  }, []);

  const dataLength = data?.length;

  const cancelled = data?.length - filtered;

  return (
    <div className="position-container">
      <HistoryHeader title={"Filled:"} value={filtered} />
      <HistoryHeader title={"Cancelled:"} value={cancelled} />
      <HistoryHeader title={"Total:"} value={dataLength} />
    </div>
  );
};

export default OrdersTop;
