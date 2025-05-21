import { useReducer } from "react"  
export const ImproveUseReducer=()=>{
    //here this code become
    // const state={
    //     count:0;
    // } 
    //at first 
    const initialState={
        count:0,
    };
    const reducer=(state,action)=>{
      switch(action.type){
        case "INCREMENT":
            return {count:state.count+1};

            case "DECREMENT":
                return {count:state.count -1};

                case "RESET":
                    return {count:0};

                    default:
                        return state;
      }
    }
    //the useReducer return two array with count and dispatch.
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <div className="h-lvh flex flex-col justify-center items-center bg-amber-400 text-5xl text-red-700">
             <h1>Hello my name is Sohan Achhami.</h1>
             <h1>{state.count}</h1>
             <button className="border-2 rounded-2xl p-3 bg-amber-950"
               onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>

             <button className="border-2 rounded-2xl p-3 bg-amber-950"
              onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
              
              <button className="border-2 rounded-2xl p-3 bg-amber-950"
              onClick={()=> dispatch({type:"RESET"})}>Reset</button>
        </div>
    )
}