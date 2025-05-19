import {useId} from "react";
export const Useid=()=>{
    const id=useId();// useId returns the unique Id string. and the react automatically generate it.
 
    return(
        <>
          <form>
            <div >
                <label htmlFor={id+"userName"}>Username:</label>
                <input className="border" type="text" id={id+"userName"} name="username"/>
            </div>
            <br />
            <div >
                <label htmlFor={id+"userPassword"}> password:</label>
                <input className="border" type="password" id={id+"userPassword"} name="password"/>
            </div>
            <br />
            <button className="border-2 rounded">Submit</button>
          </form>
        </>
    )
}


