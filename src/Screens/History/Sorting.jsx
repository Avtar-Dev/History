import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SortingContext } from "../../Contexts/SortingContext";

const Sorting = () => {
  const { data } = useSelector((state) => state.data);
  const { activeSort, toggleSort, setSortedData } = useContext(SortingContext);
  const [currentSortOrder, setCurrentSortOrder] = useState("asc");

  useEffect(() => {
    if (data?.data) {
      setSortedData(data.data);
    }
  }, [data]);

  const handleClick = (value) => {
    const newSortOrder =
      activeSort === value && currentSortOrder === "asc" ? "desc" : "asc";

    setCurrentSortOrder(newSortOrder);
    toggleSort(value);

    setSortedData(() => {
      let sortedArray = [...data.data];
      if (value === 1) {
        sortedArray.sort((a, b) =>
          newSortOrder === "asc"
            ? a.pair.localeCompare(b.pair)
            : b.pair.localeCompare(a.pair)
        );
      } else if (value === 2) {
        sortedArray.sort((a, b) =>
          newSortOrder === "asc" ? a.profit - b.profit : b.profit - a.profit
        );
      } else if (value === 3) {
        sortedArray.sort((a, b) =>
          newSortOrder === "asc" ? a.volume - b.volume : b.volume - a.volume
        );
      }
      return sortedArray;
    });
  };

  const getArrow = (column) => {
    if (activeSort === column) {
      return currentSortOrder === "asc" ? "↑" : "↓";
    }
    return "";
  };

  return (
    <div className="filter">
      <ul>
        <li onClick={() => handleClick(1)}>Symbol {getArrow(1)}</li>
        <li onClick={() => handleClick(2)}>Profit {getArrow(2)}</li>
        <li onClick={() => handleClick(3)}>Volume {getArrow(3)}</li>
      </ul>
    </div>
  );
};

export default Sorting;
