
import  {useState} from "react";
import { useJwt } from "react-jwt"



 function useToken(){

    const getToken = () =>{
        const tokenString = localStorage.getItem("token");
        const userToken= JSON.parse (tokenString)
        return userToken?.token;

    }

    const [token, setToken] = useState(getToken())
    const { decodedToken, isExpired } = useJwt(token);

    const saveToken = (userToken) => {
        localStorage.setItem("token", JSON.stringify(userToken))
        setToken(userToken?.token)
        
    };

    return{
        setToken:saveToken,
        token:getToken(), 
        decodedToken, isExpired,
        
    }

    
    

    
    

}

export default useToken