import React, { useState } from "react";
import OrdersTradesIn from "../../../Components/OrdersTradesIn";
import OrdersTrades from "../../../Components/OrdersTrades";

const OrderItem = ({ item }) => {
  const [showOrders, setShowOrders] = useState(false);

  const HandleToggel = () => {
    setShowOrders(!showOrders);
  };
  return (
    <div onClick={HandleToggel}>
      <OrdersTrades item={item} />
      {showOrders && <OrdersTradesIn item={item} />}
    </div>
  );
};

export default OrderItem;
