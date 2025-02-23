
"use client"
import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState:TodoState={
    Todos: []
}
interface TodoState{
    Todos: Todo[]
}
interface Todo{
    id:string;
    title:string;
    completed:boolean;
}
const todoSlice= createSlice({
    initialState,
    name:"todos",
    reducers:{
        addTodo:(state,action)=>{
            const Todo: Todo={
                id:nanoid(),
                title:action.payload,
                completed:false
            }
            state.Todos.push(Todo);
        }
    }
})
export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;
