import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const optionSlice = createSlice({
  name: "option",
  initialState: {
    isOptionSelected: false,
  },
  reducers: {
    toggleOption: (state) => {
      state.isOptionSelected = !state.isOptionSelected;
    },
  },
});

export const { toggleOption } = optionSlice.actions;
export const selectOption = (state: RootState) => state.option.isOptionSelected;
export default optionSlice.reducer;
