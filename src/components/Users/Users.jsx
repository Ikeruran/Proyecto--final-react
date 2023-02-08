
import UsersTable from "./UsersTable"
import { useLoaderData, Link } from "react-router-dom"
import React, { useState } from 'react';
import { getToken } from "../../utils"



export async function loader() {

    const token = getToken()
    const url = "https://localhost:1443/api/user";
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
            email: user.email,
            type: user.type,
            active: user.active,
        }
    })
    return users
}

function Users() {

    const users = useLoaderData()
    const [people, setPeople] = useState(users)

    async function deleteUser(id){
        const token = getToken()
        const url = `https://localhost:1443/api/user/${id}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }
        let usersApi = await fetch(url, options);
        usersApi = await usersApi.json();
        const users = await usersApi.map((user) => {
            return {
                id: user.id,
                email: user.email,
                type: user.type,
                active: user.active,
            }
        })
       setPeople(users)   
    }

    return (
        <div className="container">
            <UsersTable peopleData={people} deleteUser={deleteUser} />
            <Link to={"./signin"}><button className= "botones" > Add User</button></Link>
            
        </div>

    )
}
export default Users