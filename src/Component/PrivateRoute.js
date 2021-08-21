import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../App';



const PrivateRoute = ({component: Component, ...rest}) => {
    const{userId}=useContext(GlobalContext);
    console.log("USERID",userId);
    return (

        <Route {...rest} render={props => (
            !userId ?
            <Redirect to="/login" /> 
            : <Component {...props} />
        )} />
    );
};

export default PrivateRoute;