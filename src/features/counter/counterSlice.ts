import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  cells: string[];
  isWon: boolean;
  isFailed: boolean;
  wrackedMoles: number;
  missedMoles: number;
  showedMoles: number;
}

const initialState: counterState = {
  cells: new Array(9).fill("..."),
  isWon: false,
  isFailed: false,
  wrackedMoles: 0,
  missedMoles: 0,
  showedMoles: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterShowedMoles: (state) => {
      state.showedMoles = ++state.showedMoles;
    },
    counterWrackedMoles: (state) => {
      state.wrackedMoles = ++state.wrackedMoles;
    },
    counterMissedMoles: (state) => {
      state.missedMoles = ++state.missedMoles;
    },
    resetMolesCounter: (state) => {
      state.wrackedMoles = 0;
      state.missedMoles = 0;
      state.wrackedMoles = 0;
      state.missedMoles = 0;
      state.cells = new Array(9).fill("...");
    },
    isWonAction: (state, action: PayloadAction<boolean>) => {
      state.isWon = action.payload;
    },
    isFailedAction: (state, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload;
    },
    //two functions below are only for clarity, viewing in the console
    saveInArrayWrackedMoles: (state, action: PayloadAction<number>) => {
      const arr = state.cells;
      const index = action.payload;
      state.cells = arr.toSpliced(index, 1, "wracked");
    },
    saveInArrayMissedMoles: (state, action: PayloadAction<number>) => {
      const arr = state.cells;
      const index = action.payload;
      state.cells = arr.toSpliced(index, 1, "missed");
    },
  },
});

export const {
  counterShowedMoles,
  counterWrackedMoles,
  counterMissedMoles,
  resetMolesCounter,
  saveInArrayWrackedMoles,
  saveInArrayMissedMoles,
  isFailedAction,
  isWonAction,
} = CounterSlice.actions;

export default CounterSlice.reducer;
