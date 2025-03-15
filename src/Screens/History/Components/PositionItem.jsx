import React, { useState } from "react";
import Trades from "../../../Components/Trades";
import TradesIn from "../../../Components/TradesIn";

const PositionItem = ({ items }) => {
  const [showTradesIn, setShowTradesIn] = useState(false);

  const HandleToggel = () => {
    setShowTradesIn(!showTradesIn);
  };

  return (
    <div onClick={HandleToggel}>
      <Trades items={items} />
      {showTradesIn && <TradesIn items={items} />}
    </div>
  );
};

export default PositionItem;
