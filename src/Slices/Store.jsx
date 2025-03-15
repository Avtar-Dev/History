import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Thunk";
import GlobalValReducer from "./GlobalValuesSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    globalVal: GlobalValReducer,
  },
});

export default store;
