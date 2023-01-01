import { NavLink } from 'react-router-dom'
import LogoutButton from '../LogoutButton/LogoutButton'

const Nav = (props) => {
  const { isAdmin } = props.user
  return (
    <nav>
      <ul>
        {isAdmin && <li><NavLink to="/admin">Admin Panel</NavLink></li>}

        <li><NavLink to="/people">People</NavLink></li>
        <li><NavLink to="/attendance">Attendance</NavLink></li>
        <li><NavLink to="/deliverables">Deliverables</NavLink></li>

        <li><NavLink to="/profile">My Profile</NavLink></li>
        <li><LogoutButton /></li>
      </ul>
    </nav>
  )
}

export default Nav