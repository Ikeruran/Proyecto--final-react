
import {useState} from "react";
import { useJwt } from "react-jwt"

export default function useToken(){

    function getToken() {
        const tokenString = localStorage.getItem("token");
        const userToken = JSON.parse(tokenString)
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken())
    const { decodedToken, isExpired } = useJwt(token);
    

    const saveToken = (userToken) => {
        localStorage.setItem("token", JSON.stringify(userToken))
        setToken(userToken?.token)
        
    };

    const deleteToken = ()=>{
        localStorage.removeItem("token")
        setToken(null)
        window.location.reload()
    }

    return{
        setToken:saveToken,
        token:getToken(), 
        decodedToken, isExpired,
        deleteToken, 
        user:decodedToken?.user,
        
        
    }

}

