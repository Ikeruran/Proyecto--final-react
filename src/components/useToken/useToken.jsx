
import {useState} from "react";
import { useJwt } from "react-jwt"
import {getToken} from "../../utils"

export default function useToken(){

    

    const [token, setToken] = useState(getToken())
    const { decodedToken, isExpired } = useJwt(token);
    

    const saveToken = (userToken) => {
        localStorage.setItem("token", JSON.stringify(userToken))
        setToken(userToken?.token)
        
    };

    function navigateBack(){
        navigateBack(-1)
    }
        
    const deleteToken = ()=>{
        localStorage.removeItem("token")
        setToken(null)
        navigateBack()
        
    }

    return{
        setToken:saveToken,
        token:getToken(), 
        decodedToken, isExpired,
        deleteToken, 
        user:decodedToken?.user,
        
        
    }

}

