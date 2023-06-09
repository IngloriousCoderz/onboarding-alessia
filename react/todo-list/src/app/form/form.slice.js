import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText: (state, action) => action.payload,
  },
});

export default slice.reducer;

export const { setText } = slice.actions;
