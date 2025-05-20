import { useBioContext } from "./Contextapi";
export const Contact=()=>{
    const {myName,age}=useBioContext();
    return(
        <>
        <section className="h-lvh flex justify-center items-center bg-amber-400 text-2xl font-bold text-white">
           <h1>hello my name is sohan achhami(Contact) {myName} and my age is {age} </h1>
        </section>
       
        </>
    );
}
