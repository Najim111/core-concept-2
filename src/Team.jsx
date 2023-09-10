import { useState } from "react"

export default function Team(){
    const [team, setCount]= useState(11)
    const addCount = ()=>{
        const newCount= team+1;
        setCount(newCount)
    }
    const removeCount =()=>{
        setCount(team-1);
    }
    const stylePleyer={
        border: "2px solid tomato",
        margin: '20px',
        borderRadius:'20px',
        padding:'20px'

    }
return(
    <div style={stylePleyer} >
        <h3>Pleyar : {team}</h3>
        <button onClick={addCount}>Add</button>
        <button onClick={removeCount}>Remove</button>
    </div>
)
}