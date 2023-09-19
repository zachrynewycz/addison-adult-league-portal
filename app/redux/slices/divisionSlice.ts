// divisionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DivisionState {
    divisionNumber: number;
}

const initialState: DivisionState = {
    divisionNumber: 1,
};

const divisionSlice = createSlice({
    name: "division",
    initialState,
    reducers: {
        setDivisionNumber: (state, action: PayloadAction<number>) => {
            state.divisionNumber = action.payload;
        },
    },
});

export const { setDivisionNumber } = divisionSlice.actions;
export default divisionSlice;
