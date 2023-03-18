import { NavLink } from 'react-router-dom'
import './Nav.css'

// Components
import LogoutButton from '../LogoutButton/LogoutButton'

// Icons
import admin from '../../assets/icons/nav/admin.svg'
import people from '../../assets/icons/nav/people.svg'
import profile from '../../assets/icons/nav/profile.svg'
import attendance from '../../assets/icons/nav/attendance.svg'
import deliverables from '../../assets/icons/nav/deliverables.svg'

// Logo Marks
import MarkB from '../../assets/logos/logomarks/mark-b.svg'
import MarkP from '../../assets/logos/logomarks/mark-p.svg'
import MarkW from '../../assets/logos/logomarks/mark-w.svg'

//? Users can only access this nav after logging in.
//? The only conditional rendering we need here is for admin access.

const Nav = (props) => {
  const { isAdmin } = props.user
  const markSelect = 1

  return (
    <nav className='appNav'>
      <ul>
        <li>
          <NavLink to="/">
            {markSelect === 1 && <img src={MarkB} alt="Abstract flamingo" />}
            {markSelect === 2 && <img src={MarkP} alt="Abstract flamingo" />}
            {markSelect === 3 && <img src={MarkW} alt="Abstract flamingo" />}
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