import React, { useContext } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { symbolUpdate } from "../Slices/GlobalValuesSlice";

const Filtering = ({ filterData }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  const filters = data?.data;
  const filterNames = filters?.map((items) => items.pair);
  const names = [...new Set(filterNames)];

  const ClickHandle = (selectedSymbol) => {
    dispatch(symbolUpdate(selectedSymbol));
  };

  return (
    <div className="filter">
      <ul>
        <li onClick={() => ClickHandle("")}>All Symbols</li>
        {names.map((symbol, i) => (
          <li key={i} onClick={() => ClickHandle(symbol)}>
            {symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtering;
