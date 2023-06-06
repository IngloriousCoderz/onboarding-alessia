import { createSlice } from "@reduxjs/toolkit";

import { fetchTasks } from "../store/thunks";

const slice = createSlice({
  name: "tasks",
  initialState: [],
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;
