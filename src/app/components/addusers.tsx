"use client"
import { useState } from "react";
import { addUser } from "../providers/slice";
import { useDispatch } from "react-redux";
export default function AddUsers()
{

    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const userDispatch = ()=>{
        console.log(name);
        dispatch(addUser(name));
    }
    return <div>
        <h1>Users</h1>
        <input type="text" 
        onChange={(e)=>setName(e.target.value)}
        placeholder="enter your name" />
        <button
        onClick={userDispatch}
        >Add User</button>
    </div>
}

