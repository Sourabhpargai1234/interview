import React, {useState} from "react";

export default function Parent(){
    let counter=<Counter />;
    return(
        <div>
            {counter}
            {counter}
        </div>
    );
}

function Counter(){
    const[score, setScore]=useState(0);
    const[hover, setHover]=useState(false);
    let box=document.getElementById("dabba");
    if(hover){
        box.style.backgroundColor+='blue';
    }
    else{
        box.style.backgroundColor+='white';
    }
    return(
        <div 
        id="dabba"
        onPointerEnter={(()=>setHover(true))}
        onPointerLeave={(()=>setHover(false))}
        >
            <h1>{score}</h1>
            <button onClick={()=>setScore(prev=>prev+1)}>Add</button>
        </div>
    )
}