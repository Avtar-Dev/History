import React, { useState } from "react";
import "../../App.css";
import PositionComp from "./Components/PositionComp";
import OrdersComp from "./Components/OrdersComp";
import DealsComp from "./Components/DealsComp";
import { useSelector } from "react-redux";

const BakiHistory = () => {
  const [showType, setShowType] = useState(1);
  const { symbol } = useSelector((state) => state.globalVal);
  const { data } = useSelector((state) => state.data);

  const filterData = data?.data?.filter((arr) => arr.type == "CLOSE");

  const posnum =
    symbol == "" || symbol == "All Symbols"
      ? filterData?.length
      : filterData?.filter((arr) => arr.pair == symbol)?.length;
  const ordnum =
    symbol == "" || symbol == "All Symbols"
      ? data?.data?.length
      : data?.data?.filter((arr) => arr.pair == symbol)?.length;
  return (
    <div className="baki-history">
      <div className="buttons">
        <div
          className="btn"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1rem",
            ...(showType === 1 ? { borderBottom: "1px solid blue" } : null),
          }}
          onClick={() => setShowType(1)}>
          {" "}
          POSITIONS({posnum})
        </div>
        <div
          className="btn"
          style={{
            ...(showType === 2 ? { borderBottom: "1px solid blue" } : null),
          }}
          onClick={() => setShowType(2)}>
          ORDERS({ordnum})
        </div>
        <div
          className="btn"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "1rem",
            ...(showType === 3 ? { borderBottom: "1px solid blue" } : null),
          }}
          onClick={() => setShowType(3)}>
          DEALS({ordnum})
        </div>
      </div>

      {showType == 1 ? (
        <PositionComp data={filterData} />
      ) : showType == 2 ? (
        <OrdersComp data={data?.data} />
      ) : showType == 3 ? (
        <DealsComp data={data?.data} />
      ) : null}
    </div>
  );
};

export default BakiHistory;
