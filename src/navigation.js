import React from 'react'
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  render() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Landing Page</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
       </nav>
    )
  }
}
export default Navigation