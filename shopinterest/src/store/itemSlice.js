import {createSlice} from "@reduxjs/toolkit";
 


const itemSlice=createSlice({
    name: "items",
    initialState:[],
    reducers:{
        addInitialitems:(state,action)=>{
            return action.payload;
        }
    }
})
export const itemsactions=itemSlice.actions;
export default itemSlice;

