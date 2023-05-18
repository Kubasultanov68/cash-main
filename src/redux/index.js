import {configureStore} from "@reduxjs/toolkit";
import things from "./reducers/things";
import receipt from "./reducers/receipt";

const store = configureStore({
    reducer: {
        things: things,
        receipt: receipt,
    }
})

export default store