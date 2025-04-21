import react, { useState } from 'react'
function Counter_Usestate()
{
     const [cnt,setCount] =useState(0)

     return (
          <div style={{padding:"20px"}}>
            <p>u clicked {cnt} times</p>
            <button onClick={()=>setCount(cnt+1)}>click me </button>

          </div>
     );
}

export default Counter_Usestate