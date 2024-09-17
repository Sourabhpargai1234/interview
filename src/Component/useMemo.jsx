import React from 'react'

const MyComponent=React.memo(({value})=>{
    console.log('Rendering MyComponent');
    return <div>{value}</div>;
});

export default function Optimization() {
    const[count, setCount]=React.useState(0);
  return (
    <div>
      <MyComponent value="Hello" />
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}
