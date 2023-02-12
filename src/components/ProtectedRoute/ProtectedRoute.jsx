import {Outlet} from "react-router-dom"
import useToken from "../useToken/useToken"

function ProtectedRoute(){
    const {token, isExpired}= useToken()
    
if(!token ||isExpired){
  window.location.reload()
}
return<Outlet/>
}

export default ProtectedRoute