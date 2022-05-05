import { createSlice } from "@reduxjs/toolkit";

export const mydata = createSlice ({
    name : "user", 
    initialState : {
        userinput : "Princy", 
        sidevalue1 : "Krishna",
        sidevalue2 : "Radha",
        sidevalue3 : "Praveen",
    },
    reducers : {
        update : (state,action) => {
            state.userinput = action.payload.currentvalue;
        },
    },
});

export const {update} = mydata.actions;
export default mydata.reducer;