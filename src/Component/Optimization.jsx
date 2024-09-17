import React,{useState} from 'react'
const childComponent=React.memo(({onClick})=>{
    console.log('Child Component rendered');
    return <button onClick={onClick}>Click me</button>
});

export default function Optimization() {
    const [count, setCount]=useState(0);
    const handleClick=React.useCallback(()=>{
        setCount(pehla=>pehla+1);
    },[]);
  return (
    <div>
      <p>Count: {count}</p>
      <childComponent onClick={handleClick}/>
    </div>
  );
};
