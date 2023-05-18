import {createSlice} from "@reduxjs/toolkit";

const receiptSlice = createSlice({
    name: "receipt",
    initialState: {
      data: [],
      total: 0
    },
    reducers: {
        addProduct: (state, {payload}) => {
            state.data =
                state.data.some((item) => item.id === payload.id)
                    ? state.data.map((item) => {
                        if (item.id === payload.id) {
                            return {...item, count: item.count + 1}
                        }
                        return item
                    }) : [...state.data, {...payload, count: 1}]
            state.total = state.data.reduce((acc, rec) => acc + rec.count * rec.price ,0)
        },
        deleteProduct: (state, {payload}) => {
            state.data =
                state.data.some((item) => item.id === payload.id)
                    ? state.data.map((item) => {
                        if (item.id === payload.id && item.count > 0) {
                            return {...item, count: item.count - 1}
                        }
                        return item
                    }) : ""
            state.total = state.data.reduce((acc, rec) => acc + rec.count * rec.price ,0)
        }
    }
})

export const {addProduct, deleteProduct} = receiptSlice.actions

export default receiptSlice.reducer