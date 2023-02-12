
import React from "react"
import Dashboard from '../components/Dashboard/Dashboard';
import Index from "../components/Index/Index";
import Teachers, {loader as teachersLoader} from "../components/Teachers/Teachers"
import Students, {loader as studentsLoader} from "../components/Students/Students"
import Error from "../components/Error/Error"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"
import { createBrowserRouter} from 'react-router-dom';
import Users, {loader as usersLoader} from "../components/Users/Users";
import Profile, {loader as profileLoader} from "../components/Profile/Profile"
import SignUp from "../components/SignUp/SignUp";
import { action as addUserAction } from "../components/Users/UsersAdd";
import {action as addStudentsAction} from "../components/Students/StudentsAddForm"
import StudentsForm from "../components/Students/StudentsForm";


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
                                loader: profileLoader,

                                
                            },
                            {
                                path: "users",
                                element: <Users />,
                                loader:usersLoader,
                               

                            },
                            {
                                path: "users/signup",
                                element: <SignUp/>
                            },
                            {
                                path: "users/signup/usersadd",
                                action: addUserAction,
                                
                              },
                            {
                                path: "teachers",
                                element: <Teachers/>,
                                loader: teachersLoader,
                            },
                            {
                                path: "students/students",
                                element: <StudentsForm/>
                            },
                            {
                                path: "students/students/studentsform",
                                action: addStudentsAction,
                                
                              },

                            
                            {
                                path: "students",
                                element: <Students />,
                                loader:studentsLoader,
                                
                            },


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