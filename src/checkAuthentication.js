import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import auth from './authentication';

 function CheckAuthentication({component: Component, ...remainingProps}) {
     console.log(auth);
     return (
        <Route {...remainingProps} render={ (props) => {
            if(auth.isUserAuthenticated()) 
                return <Component {...props} />;
            else
                return <Redirect to={{
                    pathname: "/unauthorized"
                }} />
        }}  
        />
    );
  }
  export default CheckAuthentication;