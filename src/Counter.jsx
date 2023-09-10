import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const addCount =()=>{
        const newCount = count+1;
        setCount(newCount)
    }
    const redusCount= ()=> {
        const newCount= count-1;
        setCount(newCount)
    }

    return (
        <div style={{border:' 2px solid blue'}}>
            <h4>Counter : {count}</h4>
            <button onClick={addCount}>Add</button>
            <button onClick={redusCount}>Redus</button>
        </div>
    )
}