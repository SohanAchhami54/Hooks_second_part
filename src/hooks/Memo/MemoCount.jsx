import { memo,useRef } from "react";
 export const MemoCount=memo(({bioData})=>{
    const count=useRef(0);
    return(
        <div className="flex justify-center mt-10 text-5xl">
            <h1>Hello I am useRef hook {count.current++} </h1>
            <br />
            <h1> {bioData.name} </h1>
        </div>
    );
});
