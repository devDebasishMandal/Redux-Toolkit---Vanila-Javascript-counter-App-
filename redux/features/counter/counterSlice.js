import { createSlice } from "@reduxjs/toolkit";



const initialState=0;

const counterSlice =createSlice({
    name:"counter",
    initialState:initialState,
    // not actual reducers but logic of reducers 

    reducers :{
        // these keys are actions
        increase: (state,action)=>{return state+1},
        decrease:(state,action)=>state-1,
        reset:state=>initialState
    }
})


//actions

export const {increase,decrease,reset}=counterSlice.actions;

// genrally reducers are export as default so 

export default counterSlice.reducer;