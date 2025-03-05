
import React, { useState } from "react";  

const AuthContext = React.createContext({
    token:'',
    email:'',
    isLoggedIn: false,
    login: (token,email ) => {},
    logout: () => {}
});

export const  AuthContextProvider = (props) => {
    
    const storedToken = localStorage.getItem('token');
    const storedEmail=localStorage.getItem('email');    
    const [token, setToken] = useState(storedToken);
    const [email,setEmail]=useState(storedEmail || '');

    

    const userIsLoggedIn = !!token;

    const loginHandler = (token,email) => { 
        console.log("user logged in",email);
        setToken(token);
        setEmail(email);
        localStorage.setItem('token', token);
        localStorage.setItem('email',email);
        
    }; 

    const logoutHandler = (navigate) => {    
        setToken(null);
        setEmail('');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/login');
       
    };  

    const contextValue = {  
        token: token,
        email:email,
        isLoggedIn: userIsLoggedIn,  
        login: loginHandler,
        logout: logoutHandler,
        
    };

    return <AuthContext.Provider value={contextValue}>  
        {props.children}
    </AuthContext.Provider>     
}
export default AuthContext;
