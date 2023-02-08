import React from "react"
import Login from "../Login/Login"
import useToken from "../useToken/useToken"
import AdminScreen from "../Screens/AdminScreen"
import TeacherScreen from "../Screens/TeacherScreen"
import {getToken} from "../../utils"




function Dashboard() {

  

    const { setToken, isExpired, decodedToken} = useToken()
    const token= getToken()
   
    
    if (!token || isExpired) {
        return (
            <>
                <Login setToken={setToken} />

            </>
        )
    }

    let type = decodedToken.user.type
    if (type === "admin") {
        return (
           <AdminScreen/>
        )
    } else if (type === "teacher") {
        return (
            <TeacherScreen/>
        )
    }

}

export default Dashboard