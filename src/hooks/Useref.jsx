import { useRef } from "react";
export const UseRef=()=>{
    const username=useRef(null);
    const password=useRef(null);
 const handleForm=(e)=>{
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
 }
    return(
        <>
        <form onSubmit={handleForm}>
            <input type="text" 
             placeholder="enter your firstname"
             ref={username}
             />
    <br />
             <input type="text" 
             placeholder="enter your lastname"
              ref={password}
             />
             <br />
             <button>Submit</button>
        </form>
        </>
    )
}