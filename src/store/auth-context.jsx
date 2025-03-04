
import React, { useState } from "react";  

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const  AuthContextProvider = (props) => {
    
    const storedToken = localStorage.getItem('token');
    const [token, setToken] = useState(storedToken);

    

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => { 
        setToken(token);
        localStorage.setItem('token', token);
        
    }; 

    const logoutHandler = (navigate) => {    
        setToken(null);
        localStorage.removeItem('token');
        navigate('/login');
       
    };  

    const contextValue = {  
        token: token,
        isLoggedIn: userIsLoggedIn,  
        login: loginHandler,
        logout: logoutHandler    
    };

    return <AuthContext.Provider value={contextValue}>  
        {props.children}
    </AuthContext.Provider>     
}
export default AuthContext;
