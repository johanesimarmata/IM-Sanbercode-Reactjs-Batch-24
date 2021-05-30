import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    const currentUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(currentUser ? currentUser : null);

    

    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}