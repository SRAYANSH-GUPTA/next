"use client"

import { useDispatch, useSelector } from "react-redux";
import { api } from "../providers/slice";
import { useEffect } from "react";

export default function Api(){
    const dispatch = useDispatch();
    const apidata = useSelector((state:any)=>state.userdata.userapiData);
    console.log(apidata);
    useEffect(()=>{
        dispatch(api() as any);
    },[dispatch]);
    return(
        <div>
            <h1>Api</h1>
            <button onClick={() => dispatch(api() as any)}>Fetch Data</button>
            {apidata?.map((val:any)=><li key={val.id}>{val.name}</li>)}
        </div>
    )
}