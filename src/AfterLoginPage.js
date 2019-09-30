import React from 'react'
import auth from './authentication';

class AfterLoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={this.logOut}>Logout</button>
      </div>
    )
  }
  
  logOut = () => {
      auth.logout().then(() => {
        this.props.history.push('/');
      });
  }
}
export default AfterLoginPage