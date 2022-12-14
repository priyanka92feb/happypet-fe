import React, {useState} from "react";

const AuthContext = React.createContext({
    toke: '',
    isLoggedIn: false,
    login: (token) => {

    },
    logout: () => {

    }
}); 

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
        setToken(token);
    };
    const logoutHanler = () => {
        setToken(null);
    }
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHanler
    };
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;