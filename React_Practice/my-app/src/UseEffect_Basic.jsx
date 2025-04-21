import { useEffect, useState } from 'react';

function UseEffect_Basic() {
  const [count, setCount] = useState(0);


//   side effect 
    useEffect(()=>{
          console.log(" u clicked " , count, "times!:)")
    },[count])


       return <>
       <button onClick={()=>setCount(count+1)}> clicked {count}</button>
       </>
}
export default UseEffect_Basic