// import { Route, Redirect } from "react-router-dom";
// import { isAuth } from "./isAuth";

// const ProtectedRoute = ({component, ...rest}) => {
//     return ( 
//         <Route {...rest}  render ={(props)=>{

//             isAuth() ? (
//                 <component {...props}/>
//             ):(
//                 <Redirect to={{pathname : '/'}} />

//             )
            
//         }}/>
//      );
// }
 
// export default ProtectedRoute;


import React, {Component} from 'react'
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "./isAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;