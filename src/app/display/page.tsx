"use client"
import {useState} from "react";
import {ReactNode} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../providers/slice";
import DisplayUsers from "../components/displayusers";
interface User {
    id: string;
    name: string;
}

interface RootState {
    users: [
        {
            id:1,
            name:"John"
        },
        {
            id:2,
            name:"Jane"
        }
    ]
}

export default function Display(){
    const userData = useSelector((state: RootState) => {
        console.log(state.users);
        return state.users;
    });
    const dispatch = useDispatch();
    const removeUserDispatch = (name:string)=>{
        dispatch(removeUser(name));
    }
    return (
        <div>
            <h1>Display</h1>
            {userData?.map((user:any) => (
                <li key={user.id}>{user.name} <button onClick={()=> removeUserDispatch(user.name)}>Remove</button></li>
            ))}
            {/* <DisplayUsers /> */}
          
        </div>
    )
}