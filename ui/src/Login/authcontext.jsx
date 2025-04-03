import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedStatus = localStorage.getItem('isLoggedIn');
        const storedUser = localStorage.getItem('user');
        if(storedStatus) {
            setIsLoggedIn(JSON.parse(storedStatus));
            setUser(JSON.parse(storedUser));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        localStorage.setItem('user', JSON.stringify(user));
         }, [isLoggedIn, user])

         return (
            <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
                {children}
            </AuthContext.Provider>
         )
}