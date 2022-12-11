import { Link } from 'react-router-dom'

const NavBar = () => {

  const protectedLinks = (
    <ul>
      <li>Welcome</li>
      <li><Link to="/profiles">Profiles</Link></li>
      <li><Link to="" >LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
    </ul>
  )

  const publicLinks = (
    <ul>
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>
  )

  return (
    <nav>
      {protectedLinks}
      {publicLinks}
    </nav>
  )
}

export default NavBar
