import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface payAmountState {
  value: number;
  hourlyRate: number;
  currentTime: string;
  endTime: string;
  parkName: string;
  licensePlateNumber: string;
}

const initialState: payAmountState = {
  value: 0,
  hourlyRate: 3, //Initial hourly rate value
  currentTime: "0:00:00 AM",
  endTime: "0:00:00 AM",
  parkName: "FL-100",
  licensePlateNumber: "30DZLG"
};

export const payReducer = createSlice({
  name: "payAmount",
  initialState,
  reducers: {
    payAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setHourlyRate: (state, action: PayloadAction<number>) => {
      state.hourlyRate = action.payload;
    },
    currentTime: (state, action: PayloadAction<string>) => {
      state.currentTime = action.payload;
    },
    endTime: (state, action: PayloadAction<string>) => {
      state.endTime = action.payload;
    },
    parkName: (state, action: PayloadAction<string>) => {
      state.parkName = action.payload;
    },
    licensePlateNumber: (state, action: PayloadAction<string>) => {
      state.licensePlateNumber = action.payload;
    },
  },
});

export const { payAmount, setHourlyRate, currentTime, endTime, parkName, licensePlateNumber } = payReducer.actions;

export default payReducer.reducer;
