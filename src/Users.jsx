import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        
    }, [])
    return (
        <div>
            <h4>Users : {users.length}</h4>
        </div>
    )
}

/**
 * declare a state to hold the data 
 * (data gula rkhar jonno {useState declare} ota toiri kora)
 * 2. useEffect tow paramitars taken insite... a. call back
 * b Depentdence arry
 * 3. use fetch to load data
 */