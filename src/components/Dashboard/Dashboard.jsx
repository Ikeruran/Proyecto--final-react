import { Outlet, Link } from "react-router-dom"
import Login from "../Login/Login"
import useToken from "../useToken/useToken"


function Dashboard() {

    const {token, setToken, decodedToken,isExpired}= useToken()
    console.log(decodedToken)

    

    if(!token || isExpired){
        return (
            <>
        <Login setToken={setToken}/>
        
        
        </>
        )
    }

    if (decodedToken.user.type==="admin"){
        
    }
    return (
        <>
            <div id="sidebar">
                <h1>React router veridas</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={"./profile"}>Profile</Link>
                        </li>
                        <li>
                            <Link to={"./users"}>Users</Link>
                        </li>
                        <li>
                            <Link to={"./teachers"}>Teachers</Link>
                        </li>
                        <li>
                            <Link to={"./students"}>Students</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"><Outlet /></div>
        </>
    )
}

export default Dashboard