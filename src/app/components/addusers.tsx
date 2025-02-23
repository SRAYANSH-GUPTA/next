"use client"
import { useState } from "react";
import { addUser } from "../providers/slice";
import { useDispatch } from "react-redux";
import { removeUser } from "../providers/slice";

export default function AddUsers()
{

    const [name,setName] = useState('');
    const [removeName,setRemoveName] = useState('');
    const dispatch = useDispatch();
    const removeUserDispatch = ()=>{
        console.log(removeName);
        dispatch(removeUser(removeName));
    }
    const userDispatch = ()=>{
        console.log(name);
        dispatch(addUser(name));
    }
    return <div>
        <h1>Users</h1>
        <input type="text" 
        onChange={(e)=>setName(e.target.value)}
        placeholder="enter your name" />
        <input type="text"
        onChange={(e) => setRemoveName(e.target.value)}
        placeholder="enter your name to remove" />
        <button
        onClick={userDispatch}
        >Add User</button>
        <button
        onClick={removeUserDispatch}
        >Remove user</button>
    </div>
}

