import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
    name:"styles",
    initialState:{
        styleList : ["balu"]
    },
    reducers:{
        updateStyles : (state,action)=>{
            state.styleList.push(action.payload);
        },
        removeStyles : (state,action) =>{
            state.styleList.splice(action.payload,1);
        }
    }
})

export default styleSlice.reducer;

export const {updateStyles,removeStyles} = styleSlice.actions