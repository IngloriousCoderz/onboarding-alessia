import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "../store/actions";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText: (state, action) => action.payload,
  },
  extraReducers: {
    [addTask]: (state, action) => "",
  },
});

export default slice.reducer;

export const { setText } = slice.actions;
