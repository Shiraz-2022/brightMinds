import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

enum ReadingType {
  shortPassage = "shortPassage",
  word = "word",
  comprehension = "comprehension",
}

export const readingSlice = createSlice({
  name: "reading",
  initialState: {
    shortPassage: {},
    word: {},
    comprehension: {},
  },
  reducers: {},
});

// export const { toggleOption } = readingSlice.actions;
export const selectReading = (state: RootState, type: ReadingType) =>
  state.reading[type];
export default readingSlice.reducer;
