import {createSlice} from "@reduxjs/toolkit";
 


const bagSlice=createSlice({
    name: "bag",
    initialState:[],
    reducers:{
        addtobag:(state,action)=>{
              state.push(action.payload);
        },
        removefrombag:(state,action)=>{
            return state.filter((itemid)=> itemid!=action.payload)
        }
    }
})
export const bagactions=bagSlice.actions;
export default bagSlice;

