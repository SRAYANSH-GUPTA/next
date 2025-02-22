import React from "react";

import Link from "next/link";
import ProductCard from "../components/productcard";

interface Product {
    id: number;
    title: string;
    price: number;
    completed: boolean;
}


const About = async() =>
{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
        cache: "no-store",
        next: {
            revalidate: 10
        }
    });
    const data = await response.json();
    console.log(data);
    const value : Product[] = data;
    return (
        <div>
            <h1>About</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <p>This is the about page</p>
            <Link href="/navbar">Home</Link>
            <table className="table table-bordered">
            <thead>
                <tr>
                   
                    <th>Name</th>
                    <th>completed</th>
                   
                   
                    </tr>
                    </thead>
                    <tbody>
                        {value.map(value => <tr key={value.id} >
                            <td>{value.title}</td>
                        <td>{value.completed.toString()}</td>

                       
                        </tr>)}
                    </tbody>
            </table>
            <ProductCard />
        </div>
    )
}

export default About;