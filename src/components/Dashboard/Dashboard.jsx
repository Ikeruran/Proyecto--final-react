import React from "react"
import Login from "../Login/Login"
import useToken from "../useToken/useToken"
import AdminScreen from "../Screens/AdminScreen"
import TeacherScreen from "../Screens/TeacherScreen"




function Dashboard() {

  

    const { token, setToken, isExpired, decodedToken} = useToken()

    
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