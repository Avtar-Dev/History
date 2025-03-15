import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const SortingContext = createContext();

export const SortingProvider = ({ children }) => {
  const { data } = useSelector((state) => state.data);
  const [activeSort, setActiveSort] = useState(null);
  //   Keeps track of which column is currently being sorted (e.g., "Symbol", "Profit", or "Volume").
  // null initially, meaning no column is sorted.
  // Checked in handleClick(value), to determine if sorting should toggle order.
  // 🔹 Example:
  // If the user clicks "Profit", activeSort becomes 2.
  // If the user then clicks "Volume", activeSort updates to 3.
  const [activeSortOrder, setActiveSortOrder] = useState("asc");
  //   🔹 Purpose:

  // Controls whether the sorting order is ascending (asc) or descending (desc).
  // Initially "asc" (ascending order).
  // 🔹 Where it's used:

  // Updated inside toggleSort(value):

  const [sortedData, setSortedData] = useState(data?.data || []);
  const [filteredData, setFilteredData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [dealsData, setDealsData] = useState([]);

  const toggleSort = (value) => {
    setActiveSort((prev) => (prev === value ? value : value));

    setActiveSortOrder((prevOrder) => {
      if (activeSort === value) {
        return prevOrder === "asc" ? "desc" : "asc";
      } else {
        return "asc";
      }
    });
  };

  return (
    <SortingContext.Provider
      value={{
        activeSort,
        activeSortOrder,
        toggleSort,
        sortedData,
        setSortedData,
        filteredData,
        setFilteredData,
        ordersData,
        setOrdersData,
        dealsData,
        setDealsData,
      }}
    >
      {children}
    </SortingContext.Provider>
  );
};
