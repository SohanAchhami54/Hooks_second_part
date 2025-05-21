import { useReducer } from "react"

export const ReducerComp=()=>{
    const reducer=(state,action)=>{
         if(action.type==="INCREMENT"){
            return state+1;
         }
         if(action.type==="DECREMENT"){
          return state-1;
         }
    }
    //the useReducer return two array with count and dispatch.
    const [count,dispatch]=useReducer(reducer,0);
    return(
        <div className="h-lvh flex flex-col justify-center items-center bg-amber-400 text-5xl text-red-700">
             <h1>Hello my name is Sohan Achhami.</h1>
             <h1>{count}</h1>
             <button className="border-2 rounded-2xl p-3 bg-amber-950"
               onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
             <button className="border-2 rounded-2xl p-3 bg-amber-950"
              onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
    )
}