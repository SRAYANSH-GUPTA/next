"use client"
import { useSelector } from "react-redux";

interface User {
    id: string;
    name: string;
}

interface RootState {
    users: User[]
}

export default function DisplayUsers() {
    const userData = useSelector((state: RootState) => state.users);
    
    return <div>
        <h1>Users</h1>
        <ul>
            {userData.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
}

