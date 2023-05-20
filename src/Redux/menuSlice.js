import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice({
    name : "menuslice",
    initialState : {
        menuVisibilty : true
    },
    reducers : {
        toggleVisibility : (state,action) =>{
            state.menuVisibilty = !state.menuVisibilty;
        }
    }

})

export default menuSlice.reducer;

export const {toggleVisibility} = menuSlice.actions;