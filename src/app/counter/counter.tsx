"use client"
import { useState } from "react";

export  function CounterPage() {
    const [counter,setCounter] = useState(0);
    return(
        <div>
            <p>Count :{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
    
}