import React, { useState } from 'react';
import TableTeachers from "./TableTeachers"
import { useLoaderData } from "react-router-dom"
import { getToken } from "../../utils"

export async function loader() {

    const token = getToken()

    const url = "https://localhost:1443/api/teacher/";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    }
    let usersApi = await fetch(url, options);
    usersApi = await usersApi.json();
    const users = usersApi.map((user) => {
        return {
            id: user.id,
            dni: user.dni,
            name: user.name,
            last_name: user.last_name,
            date_of_birth: user.date_of_birth,
            createdAt: user.createdAt
        }
    })
    return users
}

export default function Teachers() {

    const users = useLoaderData()
    
    const [teachers, setTeachers] = useState(users)

    async function deleteTeacher(id){
        const token = getToken()
        const url = `https://localhost:1443/api/teacher/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }
        let usersApi = await fetch(url, options);
        usersApi = await usersApi.json();
        if(usersApi.success){
        const newUsers = users.filter(user=>user.id !==id)
        setTeachers(newUsers)}
    }


    

    
    const title= <h1>All Teachers</h1>


    return (
        <div className="container">
        <TableTeachers teacherData={teachers} title={title} deleteTeacher={deleteTeacher }/>
        </div>

    )
}