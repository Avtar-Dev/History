import React, { useEffect } from "react";
import Topbar from "../../Components/Topbar";
import BakiHistory from "./BakiHistory";
import { thunk } from "../../Slices/Thunk";
import { useDispatch } from "react-redux";
import "../../App.css";
import { SortingProvider } from "../../Contexts/SortingContext";

const History = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useeffect thunk");

    dispatch(thunk());
  }, []);

  return (
    <div className="main-div">
      <div>
        <SortingProvider>
          <Topbar />
          <BakiHistory />
        </SortingProvider>
      </div>
    </div>
  );
};

export default History;
