import React, {useEffect, useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', 'LOGGED_IN');
        setIsLoggedIn(true);
    };

    useEffect(() => {
        const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
        if(storedUserLoggedIn === "LOGGED_IN") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;