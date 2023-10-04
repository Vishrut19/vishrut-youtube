import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      // This will basically merge the payload and state.
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheResult } = searchSlice.actions;

export default searchSlice.reducer;
