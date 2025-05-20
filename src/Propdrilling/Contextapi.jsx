// import { createContext, useContext } from "react";
//here we can used the (use hooks) instead of useContext because it is more flexible than useContext.
import { createContext,use} from "react";
export const BioContext=createContext();
export const BioProvider=({children})=>{
    console.log(children);
    const myName="Sohan";
    const age=20;
    const hobby="coding";
    return(
        <>
          <BioContext.Provider value={{myName,age,hobby}}> {children} </BioContext.Provider>
        </>
    );
}


export const useBioContext=()=>{
    // const contextValue=useContext(BioContext);
    const contextValue=use(BioContext);
    return contextValue;
}