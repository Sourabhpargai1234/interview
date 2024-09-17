import React,{useState} from 'react'

export default function Counter() {
    const [counter, setCounter]=useState(0);
    const handleAdd=()=>{
        setCounter(prev=>prev+1);
    }
    const handleReduce=()=>{
        setCounter(prev=>prev-1);
    } 
    const handleReset=()=>{
        setCounter(0);
    }
  return (
    <div>
        <h1>{counter}</h1>
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    </div>
  )
}
