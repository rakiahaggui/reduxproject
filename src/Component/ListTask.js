import { createSlice } from "@reduxjs/toolkit"
export const CounterSlice= createSlice({

name:'counter',
initialState:{
    counter:10
},
reducers:{
    increment:(state,action)=>{
        state.counter+=1
    },
    decrement:(state,action)=>{
        state.counter-=1
    },
    reset:(state,action)=>{
        state.counter=0
    },
    ajoutby5:(state,action)=>{
        state.counter+=action.payload
    },
}
    })
export const {increment,decrement,reset,ajoutby5} = CounterSlice.actions;
export default CounterSlice.reducer;