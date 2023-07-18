import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    summary: {
        question: [0,0,0,0,0,0]
    }
};

export const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        updateSummary: (state, action: PayloadAction<Array<number>>) => {
            state.summary.question[action.payload[0]] = action.payload[1]
        }}
})

export const { updateSummary } = summarySlice.actions

export default summarySlice.reducer