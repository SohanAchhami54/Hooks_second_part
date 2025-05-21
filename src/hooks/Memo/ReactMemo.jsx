import { useState,useMemo } from "react"
import  {MemoCount}  from "./MemoCount";
export const ReactMemo=()=>{
    // const myBioData={
    //        name:"Sohan",
    //        age:20,
    // };
    const myBioData=useMemo(()=>{
        return{
            name:"sohan",
            age:20,
        }
    },[]);
    const [count,setCount]=useState(0);
    return(
        <>
       
        <div className="mt-60 flex flex-col justify-center items-center text-4xl">
            <h1>{count} </h1>
            <button  className="border-3 rounded-md p-2 bg-amber-700 text-white"
            onClick={()=>setCount(count+1)}> Increment </button>
        </div>
        <MemoCount bioData={myBioData}/>
         </>
    )
}