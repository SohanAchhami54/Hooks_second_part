import { useState,useMemo} from "react";
export const ExpensiveCal=()=>{
   
    const sum=()=>{
         let total=0;
      for(let i=0;i<=1000000;i++){
        total=total+i;
    }
    return total;
    }
    //useMemo hook gives the value of sum from cache of the computer. when the component mount.
    const total=useMemo(()=>sum(),[]);
    return(
        <>
        <h1>{total} </h1>
        </>
    );
};
export const UseMemo=()=>{
    const [count,setCount]=useState(0);
    return(
        <div className="flex flex-col h-lvh justify-center items-center bg-amber-800 text-4xl ">
           <h1>My name is Sohan Achhami.</h1>
           <ExpensiveCal/>
           <h1>{count} </h1>
           <button onClick={()=>{setCount(count+1)}}> Increment </button>
        </div>
    );
};