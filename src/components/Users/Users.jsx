
import UsersTable from "./UsersTable"
import { useLoaderData, Link} from "react-router-dom"
import React, { useState } from 'react';
import { getToken} from "../../utils"


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

export async function addUser({ request }){
   
const formData = await request.formData();
const fields = await Object.fromEntries(formData);
const url ="https://localhost:1443/signup"
const options= {
    method: "POST",
    headers: { "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: fields.email,
      password: fields.password,
      dni: fields.dni,
      name: fields.name,
      last_name: fields.last_name,
      date_of_birth: fields.date_of_birth,
     
    })
    }

let usersApi = await fetch(url, options)
const newUser = await usersApi.json();
return console.log(newUser)
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
        if(usersApi.success){
        const newUsers = users.filter(user=>user.id !==id)
        setPeople(newUsers)}
    }

   
    
    return (
        <div className="container">
            <UsersTable peopleData={people} deleteUser={deleteUser } />
            <Link to={"./signup"}><button className= "botones" > Add User</button></Link>
            
        </div>

    )
}
export default Users