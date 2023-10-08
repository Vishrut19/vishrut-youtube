import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      // This will basically merge the payload and state.
      // {search term -> "ip": search result ->  ["iphone 11","iphone 12", "iphone 13"]}
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheResult } = searchSlice.actions;

export default searchSlice.reducer;
