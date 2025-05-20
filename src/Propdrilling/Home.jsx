import { useBioContext } from "./Contextapi";   
export const Home=()=>{
    const contextValue=useBioContext();
// useContext(BioContext) gets the value from BioContext in the form of object like. {myName:"sohan",age:20} like this and that is contextValue={myName:"sohan",age:20};
    const {myName,age,hobby}=contextValue;
//(const myName=contextValue.name) and that is equal is to const myName="Sohan",
    return(
        <>
        <section className="h-lvh tracking-wider flex flex-col justify-center items-center bg-amber-700 font-bold text-4xl">
            <h1> Hello my name is:{myName} age is: {age} and my hobby is:{hobby} </h1>
        </section>
        
        </>
    );
}
