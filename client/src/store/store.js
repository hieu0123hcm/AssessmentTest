import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "../data/wordSlice";

const store = configureStore({
  reducer: {
    wordList: wordSlice,
  },
});

export default store;
