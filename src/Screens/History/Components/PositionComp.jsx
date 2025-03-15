import React, { memo, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PositionTop from "./PositionTop";
import PositionItem from "./PositionItem";
import { SortingContext } from "../../../Contexts/SortingContext";

const PositionComp = ({ data }) => {
  const { symbol } = useSelector((state) => state.globalVal);
  const { sortedData, filteredData, setFilteredData } =
    useContext(SortingContext);

  // sortedData: Holds the sorted list of positions.
  // filteredData: Stores the filtered version of sortedData (based on symbol).
  // setFilteredData: A function to update filteredData.

  const usedData = React.useMemo(() => {
    return sortedData?.length > 0 ? sortedData : data || [];
  }, [data, sortedData]);

  useEffect(() => {
    console.log("setting filtered data", symbol, usedData?.length);

    setFilteredData(
      symbol === "" ? usedData : usedData.filter((item) => item.pair === symbol)
    );
  }, [symbol, usedData]);

  return (
    <div>
      <PositionTop data={data} />
      {filteredData?.map((item, index) => (
        <PositionItem items={item} key={index} />
      ))}
    </div>
  );
};

export default memo(PositionComp);
