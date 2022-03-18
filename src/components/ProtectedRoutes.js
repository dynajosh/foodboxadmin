import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "./auth/auth-context/AuthContext";


const ProtectedRoute = ({component:RouteComponent, ...rest}) => {
    const {currentUser} = useAuthContext()
    return(
        <Route 
        {...rest}
        // render={() => isAuthenticated? <Component {...props} /> : <Redirect to="/signin"/>}/>
        render ={(routeProps) => !!currentUser ? (<RouteComponent {...routeProps}/>) : (<Redirect to ={"/signin"} />)
        } />
    );
}

export default ProtectedRoute;