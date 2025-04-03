import React, { useMemo } from "react";
import HistoryHeader from "../../../Components/HistoryHeader";
import "../../../App.css";
const OrdersTop = ({ data }) => {
  const filled = useMemo(() => {
    return data?.filter((item) => {
      return item?.trade_status == "FILLED";
    }).length;
  }, []);
  const filteredCancelled = useMemo(() => {
    return data?.filter((item) => {
      return item?.trade_status == "CANCELLED";
    }).length;
  }, []);

  const dataLength = data?.length;

  return (
    <div className="position-container">
      <HistoryHeader title={"Filled:"} value={filled} />
      <HistoryHeader title={"Cancelled:"} value={filteredCancelled} />
      <HistoryHeader title={"Total:"} value={dataLength} />
    </div>
  );
};

export default OrdersTop;
