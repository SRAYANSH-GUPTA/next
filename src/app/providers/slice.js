import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    users: []
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
            console.log("state of users")
            console.log(state.users);
        }
        
    }
})
export const {addUser} = slice.actions;
export default slice.reducer;

