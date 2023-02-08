import React, { useState } from 'react';
import StudentsTable from "./StudentsTable"
import { useLoaderData } from "react-router-dom"
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




    const title = <h1>Your students</h1>


    return (
        <>
            {title}
            <div className="container">
                <StudentsTable studentsData={students} />
            </div>
        </>

    )
}
export default Students