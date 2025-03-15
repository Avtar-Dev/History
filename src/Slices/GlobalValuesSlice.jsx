import { createSlice } from "@reduxjs/toolkit";

const GlobalValSlice = createSlice({
  name: "global",
  initialState: { symbol: "" },
  reducers: {
    //state set krn lai
    symbolUpdate: (state, action) => {
      state.symbol = action.payload;
    },
  },
});

export const { symbolUpdate } = GlobalValSlice.actions;
export default GlobalValSlice.reducer;
