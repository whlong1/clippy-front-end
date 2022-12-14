import { Link } from 'react-router-dom'

import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import SignupButton from '../SignupButton/SignupButton'

const NavBar = () => {

  const protectedLinks = (
    <ul>
      <li>Welcome</li>
      <li><Link to="/profiles">Profiles</Link></li>
      <li>
        <LogoutButton />
      </li>
      <li><Link to="/changePassword">Change Password</Link></li>
      <li><Link to="/admin">Admin Panel</Link></li>
    </ul>
  )

  const publicLinks = (
    <ul>
      <li>
        <LoginButton />
        <SignupButton/>
      </li>
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
