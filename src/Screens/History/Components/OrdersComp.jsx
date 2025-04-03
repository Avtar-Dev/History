import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrdersTop from "./OrdersTop";
import OrderItem from "./OrderItem";
import { SortingContext } from "../../../Contexts/SortingContext";

const OrdersComp = ({ data }) => {
  const { symbol } = useSelector((state) => state.globalVal);
  const { sortedData, setSortedData, ordersData, setOrdersData } =
    useContext(SortingContext);

  useEffect(() => {
    if (data?.length) {
      setSortedData(data);
    }
  }, [data]);

  useEffect(() => {
    setOrdersData(
      symbol === ""
        ? sortedData
        : sortedData.filter((item) => item.pair === symbol)
    );
  }, [symbol, sortedData]);

  return (
    <div>
      <OrdersTop data={data} />
      {ordersData?.map((item, i) => (
        <OrderItem item={item} key={i} />
      ))}
    </div>
  );
};

export default OrdersComp;
