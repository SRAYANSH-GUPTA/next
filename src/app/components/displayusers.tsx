"use client"
import { useSelector } from "react-redux";
import { removeUser } from "../providers/slice";
import { useDispatch } from "react-redux";
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

export default function DisplayUsers() {
    const userData = useSelector((state: any) => state.userdata.users);
    const dispatch = useDispatch();
    const removeUserDispatch = (name:String)=>{
        dispatch(removeUser(name));
    }
    return <div>
        <h1>Users</h1>
        <ul>
            {userData?.map((user:any) => (
                <li key={user.id}>{user.name} <button onClick={()=> removeUserDispatch(user.name)}>Remove</button></li>
            ))}
        </ul>
    </div>
}

