import React, { useState } from "react";

function LiveForm()
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")


    return (
        <>
       <input type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
       ></input>

        <input type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            
        ></input>



        <p>ur name is {name}</p>
        <p>ur email is {email}</p>
        </>
    )
}

export default LiveForm