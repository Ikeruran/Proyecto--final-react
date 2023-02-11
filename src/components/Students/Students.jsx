import React, { useState } from 'react';
import StudentsTable from "./StudentsTable"
import { useLoaderData, Link } from "react-router-dom"
import { getToken, decodedToken } from "../../utils"


export async function loader() {

    const token = getToken()
    const decoded = await decodedToken(token)
    const id = decoded.user.id

    const url = "https://localhost:1443/api/teacher/" + id + "/students";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    }
    let usersApi = await fetch(url, options);
    usersApi = await usersApi.json()
    console.log(usersApi)
    const users = usersApi.map((user) => {
        return {
            id:user.id,
            name: user.name,
            last_name: user.last_name,
            dni: user.dni,
            date_of_birth: user.date_of_birth,
            createdAt: user.createdAt,
        }
    })

    return users

}

function Students() {

    const users = useLoaderData()

    const [students, setStudents] = useState(users)

    async function deleteStudent(id){
        const token = getToken()
        const url = `https://localhost:1443/api/student/${id}`;
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
        setStudents(newUsers)}
    }




    const title = <h1>Your students</h1>


    return (
        <>
            {title}
            <div className="container">
                <StudentsTable studentsData={students} deleteStudent={deleteStudent } />
                <Link to={"./students"}><button className= "botones" > Add Students</button></Link>
            </div>
        </>

    )
}
export default Students