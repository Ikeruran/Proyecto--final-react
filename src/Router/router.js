
import React from "react"
import Dashboard from '../components/Dashboard/Dashboard';
import Index from "../components/Index/Index";
import Profile from "../components/Profile/Profile"
import Users from "../components/Users/Users"
import Teachers from "../components/Teachers/Teachers"
import Students from "../components/Students/Students"
import Error from "../components/Error/Error"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"
import { createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([



    {
        path: "/",
        element: <Dashboard />,
        errorElement: <Error/>,
        children: [
            {
                errorElement: <Error/>,
                children: [
                    {
                        element: <ProtectedRoute />,
                        children: [
                            {
                                index: true,
                                element: <Index />
                            },
                            {
                                path: "profile",
                                element: <Profile />,
                            },
                            {
                                path: "users",
                                element: <Users />
                            },
                            {
                                path: "teachers",
                                element: <Teachers/>
                            },
                            {
                                path: "students",
                                element: <Students />
                            }


                        ]

                    }


                ]

            }
        ]
    },
])


// const [token, setToken] = useState();

// if(!token) {
//   return <Login setToken={setToken} />

export default router