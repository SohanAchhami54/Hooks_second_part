export const Propdrill=()=>{
    return(
        <>
         <section className="h-lvh flex flex-col justify-center items-center bg-black text-amber-50 text-4xl">
           <h1>Hello I am parent component</h1>
          <ChildComponent value="React js" />

         </section>
        </>
    );
}
const ChildComponent=({value})=>{
    return(
        <>
           <h1>I am ChildComponent</h1>
           <GrandChild value={value} />
        </>
    );
}

const GrandChild=({value})=>{
    return(
        <>
        <h1>I am GrandChildcomponent</h1>
        <GrandGrandChild value={value} />
        </>
    );
}

const GrandGrandChild=({value})=>{
   return(
    <>
    <h1>I am grandgrandChildcomponent</h1>
    <h1> Finally get :{value}</h1>
    </>
   )
}