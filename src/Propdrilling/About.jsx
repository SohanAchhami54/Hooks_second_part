
import {useBioContext} from "./Contextapi";

export const About=()=>{
   
    const {myName,age,hobby}=useBioContext();
    return(
        <>
        <section className="h-lvh tracking-wider flex flex-col justify-center items-center bg-blue-700 font-bold text-4xl">
            <h1> Hello my name is:{myName} age is: {age} and my hobby is:{hobby} </h1>
        </section>
        
        </>
    );
}
