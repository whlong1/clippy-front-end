import { NavLink } from 'react-router-dom'
import './Nav.css'

// Components
import LogoutButton from '../LogoutButton/LogoutButton'

// Assets
import admin from '../../assets/icons/nav/admin.svg'
import people from '../../assets/icons/nav/people.svg'
import profile from '../../assets/icons/nav/profile.svg'
import attendance from '../../assets/icons/nav/attendance.svg'
import deliverables from '../../assets/icons/nav/deliverables.svg'

// Users can only access this nav after logging in.
// The only conditional rendering we need here is for admin access.

const Nav = (props) => {
  const { isAdmin } = props.user
  return (
    <nav className='appNav'>
      <ul>
        <li>
          <NavLink to="/">
            <img src="" alt="" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/people">
            <img src={people} alt="people" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/attendance">
            <img src={attendance} alt="attendance" />
          </NavLink>
        </li>


        <li>
          <NavLink to="/deliverables">
            <img src={deliverables} alt="deliverables" />
          </NavLink>
        </li>

        {isAdmin &&
          <li>
            <NavLink to="/admin">
              <img src={admin} alt="admin" />
            </NavLink>
          </li>
        }

        <li>
          <NavLink to="/profile">
            <img src={profile} alt="profile" />
          </NavLink>
        </li>

        <LogoutButton />
      </ul>
    </nav>
  )
}

export default Nav