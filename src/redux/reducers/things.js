import {createSlice} from "@reduxjs/toolkit";

const thingsSlice = createSlice({
    name: "things",
    initialState: {
        data: []
    },
    reducers: {
        fillThings: (state, {payload}) => {
            state.data = payload
        }
    }
})

export const {fillThings} = thingsSlice.actions
export default thingsSlice.reducer