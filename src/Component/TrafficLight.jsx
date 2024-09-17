import React, {useState, useEffect} from 'react'
import '../App'

export default function TrafficLight() {
  const[light, setLight]=useState('red');
  const obj={
    red:{
      next: "yellow",
      duration: "4000"
    },
    yellow: {
      next: "green",
      duration: "5000"
    },
    green: {
      next: "red",
      duration: "3000"
    }
  }
  useEffect(()=>{
    setTimeout(()=>{
      setLight(obj[light].next);
    },obj[light].duration);
  },[light])
  
  return (
    <div className='traffic-light'>
      <div className={`light ${light=='red'?'red':''} `}></div>
      <div className={`light ${light=='yellow'?'yellow':''} `}></div>
      <div className={`light ${light=='green'?'green':''} `}></div>
    </div>
  )
}
