import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
}


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
    
        
    }
})
export const {addUser} = slice.actions;
export const {removeUser} = slice.actions;
export default slice.reducer;

