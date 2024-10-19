import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const startTimer = createAsyncThunk<void, void, { state: RootState }>(
  "mic/startTimer",
  async (_, { dispatch, getState }) => {
    const intervalId = setInterval(() => {
      const state: RootState = getState() as RootState;

      if (state.mic.isMicOn) {
        dispatch(incrementTime());
      } else {
        dispatch(resetTime());
        clearInterval(intervalId);
      }
    }, 1000);
  }
);

export const micSlice = createSlice({
  name: "mic",
  initialState: {
    isMicOn: false,
    time: 0,
  },
  reducers: {
    toggleMic: (state) => {
      state.isMicOn = !state.isMicOn;
    },
    incrementTime: (state) => {
      state.time += 1;
    },
    resetTime: (state) => {
      state.time = 0;
    },
  },
});

export const { toggleMic, incrementTime, resetTime } = micSlice.actions;
export const selectMic = (state: RootState) => state.mic.isMicOn;
export const selectTime = (state: RootState) => state.mic.time;
export default micSlice.reducer;
