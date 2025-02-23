"use client"
import {useState} from "react";
import {ReactNode} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../providers/slice";
interface User {
    id: string;
    name: string;
}

interface RootState {
    users: User[]
}

export default function Display(){
    const userData = useSelector((state: RootState) => {
        console.log(state.users);
        return state.users;
    });
    const dispatch = useDispatch();
    const addUserDispatch = (name:string)=>{
        dispatch(addUser(name));
    }
    return (
        <div>
            <h1>Display</h1>
            {
                userData?.map((val:User)=><li key={val.id}>{val.name}</li>)
            }

        </div>
    )
}