import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Filtering from "./Filtering";
import { setDateSet, thunk } from "../Slices/Thunk";
import DatePicker from "react-multi-date-picker";
import Sorting from "../Screens/History/Sorting";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const dateOpenRef = useRef();
  const filterRef = useRef(null);
  const sortRef = useRef(null);
  const dispatch = useDispatch();
  const { data, dateSet } = useSelector((state) => state.data);

  const filterData = data?.data?.filter((arr) => arr.type === "CLOSE");

  const onDateChange = (date) => {
    console.log("top date", date);

    if (date?.length > 1) {
      dateOpenRef.current.closeCalendar();
      const finalDates = date.map((date) => date.format("YYYY-MM-DD HH:mm:ss"));
      dispatch(setDateSet(finalDates));
      dispatch(thunk());
    }
  };

  const handleDateToggle = () => {
    dateOpenRef.current?.isOpen
      ? dateOpenRef.current.closeCalendar()
      : dateOpenRef.current.openCalendar();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    if (isOpen || sortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, sortOpen]);

  return (
    <div className="topbar-container">
      <div className="upper-row">
        <div className="symbol">
          <div>History</div>
          <div className="all-symbol">
            <b>All Symbols</b>
          </div>
        </div>
        <div className="span">
          <div onClick={() => setIsOpen(!isOpen)}>
            <FaArrowsRotate />
          </div>
          {isOpen && (
            <div ref={filterRef}>
              <Filtering filterData={filterData} />
            </div>
          )}

          <div onClick={() => setSortOpen(!sortOpen)}>
            <HiMiniArrowsUpDown />
          </div>
          {sortOpen && (
            <div ref={sortRef}>
              <Sorting />
            </div>
          )}

          <div className="calender">
            <FaRegCalendarAlt onClick={handleDateToggle} />
            <DatePicker
              ref={dateOpenRef}
              rangeHover
              onChange={onDateChange}
              value={dateSet}
              range={true}
              inputClass="hidden-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
