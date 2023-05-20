import {configureStore} from "@reduxjs/toolkit"
import menuSlice from "./menuSlice"
import textAreaContentSlice from "./textAreaContentSlice"
import styleSlice from "./styleSlice"
const store = configureStore({
    reducer : {
        menu : menuSlice,
        textContent : textAreaContentSlice,
        styles : styleSlice
    }
})

export default store