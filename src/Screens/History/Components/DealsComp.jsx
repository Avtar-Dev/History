import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DealsTop from "./DealsTop";
import DealsItem from "./DealsItem";
import { SortingContext } from "../../../Contexts/SortingContext";

const DealsComp = ({ data }) => {
  const { symbol } = useSelector((state) => state.globalVal);
  const { sortedData, setSortedData, dealsData, setDealsData } =
    useContext(SortingContext);

  useEffect(() => {
    if (data?.length) {
      setSortedData(data);
    }
  }, [data]);

  useEffect(() => {
    setDealsData(
      symbol === ""
        ? sortedData
        : sortedData.filter((item) => item.pair === symbol)
    );
  }, [symbol, sortedData]);

  console.log("DealsComp render");

  return (
    <div>
      <DealsTop data={data} />
      {dealsData.map((item, i) => (
        <DealsItem item={item} key={i} />
      ))}
    </div>
  );
};

export default DealsComp;
