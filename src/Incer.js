import React from 'react'
import {useState} from 'react'
const Create=()=>{
    const[state,setState]=useState(0)
    function incrementCount(){
        setState(state+1)
    }
    function decrementCount() {
    setState(state-1)
    }
    return (
        <div>
            <h1>Count: {state}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            </div>
            )
    
}
export default Create;