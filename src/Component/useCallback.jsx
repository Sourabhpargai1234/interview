import React,{useCallback, useState} from 'react'

export default function UseCallback() {
    const [count, setCount]=useState(0);
    const incremant=useCallback(()=>{
        setCount(internship=>internship+1)
    },[]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>incremant()}>Increment</button>
    </div>
  )
}
