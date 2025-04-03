import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedStatus = localStorage.getItem('isLoggedIn');
        if(storedStatus) {
            setIsLoggedIn(JSON.parse(storedStatus));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
         }, [isLoggedIn])

         return (
            <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
                {children}
            </AuthContext.Provider>
         )
}