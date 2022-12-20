import { Link } from 'react-router-dom'

import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import SignupButton from '../SignupButton/SignupButton'

const NavBar = (props) => {
  const protectedLinks = (
    <ul>
      <li><LogoutButton /></li>
      <li><Link to="/admin">Admin Panel</Link></li>

      <li><Link to="/people">People</Link></li>
      <li><Link to="/onboarding">Onboarding</Link></li>
    </ul>
  )

  const publicLinks = (
    <ul>
      <li><LoginButton /></li>
      <li><SignupButton /></li>
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
