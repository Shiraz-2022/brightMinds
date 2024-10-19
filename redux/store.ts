import { configureStore } from "@reduxjs/toolkit";
import micReducer from "@/redux/slices/micSlice";

export const store = configureStore({
  reducer: {
    mic: micReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
