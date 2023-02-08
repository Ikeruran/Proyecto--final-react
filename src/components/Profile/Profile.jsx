
import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom"
import "./Profile.css"
import { getToken, convertDate, decodedToken } from "../../utils"



export async function loader() {

    const token = getToken()
    const decoded = await decodedToken(token)
    const id = decoded.user.id

    const url = "https://localhost:1443/api/user/" + id;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    }

    let usersApi = await fetch(url, options);
    const users = await usersApi.json();
    return users


}

export default function Profile() {

    const users = useLoaderData()
    const [profile, setProfile] = useState(users)



    function UserData() {

        return (
            <div >
                <div className="tarjeta">
                    <div><h1>User Profile</h1></div>
                    <p> <b>Email: </b> {profile.email}</p>
                    <p> <b>Type: </b> {profile.type}</p>
                    <p> <b>Status: </b> {profile.active ? "active" : "inactive"}</p>
                </div>

            </div>


        )
    }


    function TeacherData() {

        return (
            <div >
                <div className="tarjeta">
                    <div><h1>Teacher Profile</h1></div>
                    <p> <b>Name: </b> {profile?.teacher.name}</p>
                    <p> <b>Last Name: </b> {profile?.teacher.last_name}</p>
                    <p> <b>DNI: </b> {profile?.teacher.dni}</p>
                    <p><b>Fecha de nacimiento: </b>{convertDate(profile?.teacher.date_of_birth)}</p>
                </div>

            </div>

        )
    }

    if (profile.type === "teacher" && profile.teacher !== null) {
        return (
            <>
                <UserData />
                <TeacherData />
            </>
        )
    } else {
        return <UserData />
    }

}

