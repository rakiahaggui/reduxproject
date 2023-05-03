import { createSlice } from "@reduxjs/toolkit";
const todoSlice =createSlice({
    name:'todos',
    initialState:[{
        id:idv4(),
        description:exception information ,
        isdone:true,
} ,  
{
    id:idv4()
    description:total information ,
    isdone:false,
}   
{
    id:idv4(),
    description:partial information ,
    isdone:true,
}] ,
reducers:{
    add(state,action)=>{
const newtask={
    id:idv4(),
    description:action.payload ,
    isdone:false,
}  
state.push(nawtask) 
}
    }

}  



