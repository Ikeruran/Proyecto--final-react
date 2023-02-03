import React, { useEffect, useState } from 'react';
import StudentsTable from "./StudentsTable"
import useToken from "../useToken/useToken"


async function getStudents(token, id) {

    const url = "https://localhost:1443/api/teacher/"+ id +"/students";
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

    const { token, user } = useToken()
    
    const [students, setStudents] = useState([])
    

    useEffect(() => {

        const fetchData= async()=>{
            if (user){
                const userData=  await getStudents(token, user.id);
                setStudents(userData||[])
                
                
            }
        }
        fetchData()
        
    },[token, user])

    const title= <h1>Your students</h1>


    return (
        <>
        {title}
        <div className="container">  
        <StudentsTable studentsData={students} />
        </div>
        </>

    )
}