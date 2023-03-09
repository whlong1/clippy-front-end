import { NavLink } from 'react-router-dom'
import LogoutButton from '../LogoutButton/LogoutButton'

// Users can only access this nav after logging in.
// The only conditional rendering we need here is for admin access.


//! Emoji icons are only placeholders!

const Nav = (props) => {
  const { isAdmin } = props.user
  return (
    <nav className='appNav'>
      <ul>
        <li><NavLink to="/"></NavLink></li>
        <li><NavLink to="/people">P</NavLink></li>
        <li><NavLink to="/attendance">A</NavLink></li>
        <li><NavLink to="/deliverables">D</NavLink></li>

        {isAdmin && <li><NavLink to="/admin">*</NavLink></li>}
        <li><NavLink to="/profile">U</NavLink></li>
        <li><LogoutButton /></li>
      </ul>
    </nav>
  )
}

export default Nav