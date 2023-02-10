import useToken from "../useToken/useToken"
import { Outlet, Link } from "react-router-dom"


function TeacherScreen() {
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
                            <Link to={"./students"}>Students</Link>
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

export default TeacherScreen