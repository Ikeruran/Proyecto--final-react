
import React, { useEffect, useState } from 'react';
import UsersTable from "./UsersTable"
import useToken from "../useToken/useToken"


async function getUsers(token) {

    const url = "https://localhost:1443/api/user/";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    }
    return fetch(url, options)
        .then((res) => res.json())
        
}

export default function Users() {

    const { token } = useToken()
    
    const [users, setUsers] = useState([])
    

    useEffect(() => {

        const fetchData= async()=>{
            if (token){
                const userData=  await getUsers(token);
                setUsers(userData||[])
                
                
            }
        }
        fetchData()
        
    },[token])

    const title= <h1>All users</h1>


    return (
        <div className="container">
        <UsersTable userData={users} title={title}/>
        </div>

    )
}