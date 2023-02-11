import useToken from "../useToken/useToken"
import { Outlet, Link } from "react-router-dom"


function AdminScreen() {
    const { deleteToken } = useToken()
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
                        <Link to={"/"} onClick= {deleteToken}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"><Outlet /></div>
        </>
    )
}

export default AdminScreen