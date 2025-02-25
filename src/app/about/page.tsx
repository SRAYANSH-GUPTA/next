"use client"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import ProductCard from "../components/productcard";
import DisplayUsers from "../components/displayusers";
import { useDispatch } from "react-redux";
import { removeUser } from "../providers/slice";
import { addUser } from "../providers/slice";

interface User {
    id: string;
    name: string;
}

interface RootState {
    users: User[];
}

interface Product {
    id: number;
    title: string;
    price: number;
    completed: boolean;
}

const About = () => {
    const userData = useSelector((state: any) => state.userdata.users);
    
    const dispatch = useDispatch();
    console.log(userData);
    const [time, setTime] = useState('');
    const [user,setUser] = useState<User[]>([]);

    useEffect(() => {
        
        setTime(new Date().toLocaleTimeString());
        
   
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div>
                <h1>
                    users
                </h1>
                <h2>
                    {userData.map((val: any) => <li key={val.id}>{val.name}</li>)}
                </h2>
            </div>
            <h1>About</h1>
            <h1>{time}</h1>
            <p>This is the about page</p>
            <Link href="/navbar">Home</Link>
            <table className="table table-bordered">
            <thead>
                <tr>
                   
                    <th>Name</th>
                    <th>completed</th>
                   <div>
                    <DisplayUsers />
                   </div>
                   
                    </tr>
                    </thead>
                    <tbody>
                        {userData.map((value: any)   => <tr key={value.id} >
                            <td>{value.title}</td>
                        <td>{value.completed.toString()}</td>

                       
                        </tr>)}
                    </tbody>
            </table>
            
            <ProductCard />
        </div>
    );
};

export default About;