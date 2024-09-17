import React, { useReducer } from 'react';

function counterReducer(state, action){
    switch(action.value){
        case 'increment':
            return { count:state.count+1 };
        case 'decrement': 
            return { count:state.count-1 };
        case 'reset':
            return { count:0 };
        default:
            throw new Error('Unknown action type');
    }
}

export default function Reducer(){
    const [state, dispatch]=useReducer(counterReducer, {count:0});
    return(
        <>
          <p>Count: {state.count}</p>
          <button onClick={()=>dispatch({value: 'increment'})}>Add</button>
          <button onClick={()=>dispatch({value: 'decrement'})}>Subtract</button>
          <button onClick={()=>dispatch({value: 'reset'})}>Reset</button>
        </>
    )
}