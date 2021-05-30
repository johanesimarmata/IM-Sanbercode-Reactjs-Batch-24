import React, { useContext } from 'react'
import { UserContext } from './User/UserContext'
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({children, ...rest}){
    const [user] = useContext(UserContext)
    return(
        <Route
            {...rest}
            render={({ location }) =>
                user?.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}