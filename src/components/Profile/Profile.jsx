
import React, { useEffect, useState } from 'react';
import useToken from "../useToken/useToken"
import "./Profile.css"
import { convertDate } from "../../utils"


async function getProfile(token, id) {

    const url = "https://localhost:1443/api/user/" + id;
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

export default function Profile() {

    const { user, token } = useToken()
    const [profile, setProfile] = useState([])


    useEffect(() => {

        async function fetchData() {
            if (user) {
                const userData = await getProfile(token, user.id);
                setProfile(userData || [])

            }
        }
        fetchData()

    }, [token, user])

    function UserData() {
        return (
            <div >
                <div className="tarjeta">
                    <div><h1>User Profile</h1></div>
                    <p> <b>Email: </b> {profile.email}</p>
                    <p> <b>Type: </b> {profile.type}</p>
                    <p> <b>Active: </b> {profile.active ? "active" : "inactive"}</p>
                </div>

            </div>


        )
    }
    
    function TeacherData(){
         
        return (
            <div >
                <div className="tarjeta">
                    <div><h1>Teacher Profile</h1></div>
                    <p> <b>Name: </b> {profile.teacher.name}</p>
                    <p> <b>Last Name: </b> {profile.teacher.last_name}</p>
                    <p> <b>DNI: </b> {profile.teacher.dni}</p>
                    <p><b>Fecha de nacimiento: </b>{convertDate(profile.teacher.date_of_birth)}</p>
                </div>

            </div>

        )
    }

    if (profile.type === "teacher") {
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

