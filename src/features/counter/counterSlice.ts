import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
  isWinner: boolean;
}

const initialState: counterState = {
  value: 0,
  isWinner: false,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clickCounter: (state) => {
      state.value = ++state.value;
    },
    setWinner: (state, action: PayloadAction<boolean>) => {
      state.isWinner = action.payload;
    },
  },
});

export const { clickCounter, setWinner } = CounterSlice.actions;

export default CounterSlice.reducer;
