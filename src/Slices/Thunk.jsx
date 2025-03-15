import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const thunk = createAsyncThunk("data/thunk", async (_, { getState }) => {
  const { dateSet } = getState().data;
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  const dynamic = [lastWeek, today];

  const fromDate = dateSet.length < 1 ? dynamic[0] : dateSet[0];
  const toDate = dateSet.length < 1 ? dynamic[1] : dateSet[1];

  try {
    const response = await fetch("https://admin.yfmarkets.com/getUserOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from_dt: fromDate,
        pwd: "Fgfc@123LP999",
        to_dt: toDate,
        user_id: 700027,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: { status: "idol", data: [], error: null, dateSet: [] },
  reducers: {
    setDateSet: (state, action) => {
      state.dateSet = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(thunk.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(thunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(thunk.rejected, (state, action) => {
        state.status = "failed";
        state.data = action.error.message;
      });
  },
});

export const { setDateSet } = dataSlice.actions;
export default dataSlice.reducer;
