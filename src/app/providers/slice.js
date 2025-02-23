"use client"
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    userapiData:[],
    isLoading:false,
    users: typeof window !== 'undefined' ? 
        JSON.parse(localStorage.getItem("users") || '[]') : 
        []
}

export const api = createAsyncThunk("data",async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
})
const slice = createSlice({
    name:"users",
    initialState,
    reducers: {
        addUser:(state,action)=>{
            console.log(action);
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.users=[...state.users,data];
            localStorage.setItem("users",JSON.stringify(state.users));
            console.log("state of users")
            console.log(state.users);
        },
        removeUser:(state,action)=>{
            const data = state.users.filter((item)=>item.name !== action.payload);
            console.log(action.payload);
            console.log("Payload Above!!!!!!!!!!!");
            state.users = data;
            console.log("state of users")
            console.log(state.users);
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(api.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(api.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.userapiData=action.payload;
            })
            .addCase(api.rejected,(state)=>{
                state.isLoading=false;
            });
    }
    
       
    
});
export const {addUser} = slice.actions;
export const {removeUser} = slice.actions;
export default slice.reducer;

