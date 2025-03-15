import React, { useState } from "react";
import DealsTrades from "../../../Components/DealsTrades";
import DealsTradesIn from "../../../Components/DealsTradesIn";
const DealsItem = ({ item }) => {
  const [showDeals, setShowDeals] = useState(false);

  const HandleToggel = () => {
    setShowDeals(!showDeals);
  };
  return (
    <div onClick={HandleToggel}>
      <DealsTrades item={item} />
      {showDeals && <DealsTradesIn item={item} />}
    </div>
  );
};

export default DealsItem;
