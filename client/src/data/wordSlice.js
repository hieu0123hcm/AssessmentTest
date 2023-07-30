import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "wordList",
  initialState: {
    result: {},
  },
  reducers: {
    changeWordList: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { changeWordList } = wordSlice.actions;

export const selectCurrentWordList = (state) => state.wordSlice.result;

export default wordSlice.reducer;
