import React, {useState} from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    isAdmin: false,
    login: (data) => {

    },
    logout: () => {

    }
}); 

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;

    const [isAdmin, setIsAdmin] = useState(false);
    

    const loginHandler = (data) => {
        setToken(data.token);
        var i;
        for(i=0;i<data.roles.length;i++) {
          console.log("Role - " + data.roles[i]);
          if(data.roles[i]==='ROLE_ADMIN') {
            setIsAdmin(true);
          }
        }
    };
    const logoutHandler = () => {
        setIsAdmin(false);
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        isAdmin : isAdmin,
        login: loginHandler,
        logout: logoutHandler, 

    };
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;