import react, { useState } from 'react'
function LoginStatus()
{
       const [loggedIn,setLoggedIn] =  useState(false)

        return <>
        <button onClick={()=>setLoggedIn(!loggedIn)}>  { loggedIn? 'Logout':'Login'} </button>
        </>


}

export default LoginStatus