import { createSlice } from "@reduxjs/toolkit";

const textAreaContentSlice = createSlice({
    name : "textAreaContentSlice",
    initialState:{
        content : ""
    },
    reducers:{
        addContentToStore : (state,action) =>{
            state.content = action.payload;
        }
    }
})

export default textAreaContentSlice.reducer;

export const {addContentToStore} = textAreaContentSlice.actions;