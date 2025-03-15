import React from "react";

import HistoryHeader from "../../../Components/HistoryHeader";

const DealsTop = ({ data }) => {
  let totalprofit = 0;
  let totalswap = 0;
  let totalcommission = 0;
  let totalbalance = 0;

  data?.forEach((item) => {
    totalprofit = totalprofit + item?.profit;
    totalswap = totalswap + item?.swap;
    totalcommission = totalcommission + item?.commission;
    totalbalance = totalprofit - totalswap - totalcommission;
  });
  return (
    <div className="position-container">
      <HistoryHeader title={"Profit:"} value={Math.floor(totalprofit)} />
      <HistoryHeader title={"swap:"} value={Math.floor(totalswap)} />
      <HistoryHeader
        title={"Commission:"}
        value={Math.floor(totalcommission)}
      />
      <HistoryHeader title={"Balance:"} value={Math.floor(totalbalance)} />
    </div>
  );
};

export default DealsTop;
