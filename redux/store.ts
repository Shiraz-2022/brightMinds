import { configureStore } from "@reduxjs/toolkit";
import micReducer from "@/redux/slices/micSlice";
import optionReducer from "@/redux/slices/optionSlice";

export const store = configureStore({
  reducer: {
    mic: micReducer,
    option: optionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
