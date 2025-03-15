import React from "react";
import HistoryHeader from "../../../Components/HistoryHeader";
import "../../../App.css";

const PositionTop = ({ data }) => {
  let totalProfit = 0;
  let totalSwap = 0;
  let totalCommission = 0;
  let totalBalance = 0;
  let totalLots = 0;

  data?.forEach((element) => {
    totalProfit = totalProfit + element?.profit;
    totalSwap = totalSwap + element?.swap;
    totalCommission = totalCommission + element?.commission;
    totalBalance = totalProfit - totalSwap - totalCommission;
    totalLots = totalLots + element?.volume;
  });

  return (
    <div className="position-container">
      <HistoryHeader title="Profit:" value={Math.floor(totalProfit)} />
      <HistoryHeader title="Swap:" value={Math.floor(totalSwap)} />
      <HistoryHeader title="Commission:" value={Math.floor(totalCommission)} />
      <HistoryHeader title="Balance:" value={Math.floor(totalBalance)} />
      <HistoryHeader title="Total Lots:" value={Math.floor(totalLots)} />
    </div>
  );
};

export default PositionTop;
