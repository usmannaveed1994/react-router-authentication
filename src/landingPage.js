import React from 'react'
import auth from './authentication';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {!auth.isUserAuthenticated() ? 
        <button onClick={this.login}>Login</button> : ""
        }
      </div>
    )
  }
  login = () => {
    auth.login().then(() => {
      this.props.history.push('/dashboard');
    });
  }
}
export default LandingPage