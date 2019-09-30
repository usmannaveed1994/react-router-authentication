import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AfterLogin from './AfterLoginPage';
import LandingPage from './landingPage';
import NotFound from './notFound';
import Unauthorized from './unauthorized';
import CheckAuth from './checkAuthentication';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
         <Route path="/" exact component={LandingPage} />
         <CheckAuth path="/dashboard" component={AfterLogin} />
         <Route path="/unauthorized" component={Unauthorized} />
         <Route component={NotFound} />
       </Switch>
      </div>
    )
  }
}
export default Routes