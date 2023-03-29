import { NavLink } from 'react-router-dom'
import './Nav.css'

// Components
import Tooltip from '../Tooltip/Tooltip'
import LogoutButton from '../LogoutButton/LogoutButton'

// Icons & Audio
import admin from '../../assets/icons/nav/admin.svg'
import people from '../../assets/icons/nav/people.svg'
import profile from '../../assets/icons/nav/profile.svg'
import attendance from '../../assets/icons/nav/attendance.svg'
import deliverables from '../../assets/icons/nav/deliverables.svg'
import quackSound from '../../assets/audio/quack.mp3'

// Logo Marks
import MarkB from '../../assets/logos/logomarks/mark-b.svg'
import MarkP from '../../assets/logos/logomarks/mark-p.svg'
import MarkW from '../../assets/logos/logomarks/mark-w.svg'

//? Users can only access this nav after logging in.
//? The only conditional rendering we need here is for admin access.

const Nav = (props) => {
  const { isAdmin } = props.user
  const markSelect = 1

  const logoStyle = { opacity: '.85' }

  const quack = new Audio(quackSound)

  const makeItQuack = () => {
    quack.play()
  }

  return (
    <nav className='appNav'>
      <ul>
        <Tooltip>
          <li>
            <NavLink to="/" onClick={makeItQuack}>
              {markSelect === 1 && <img style={logoStyle} src={MarkB} alt="Abstract flamingo" />}
              {markSelect === 2 && <img style={logoStyle} src={MarkP} alt="Abstract flamingo" />}
              {markSelect === 3 && <img style={logoStyle} src={MarkW} alt="Abstract flamingo" />}
            </NavLink>
          </li>
        </Tooltip>

        <Tooltip text="People">
          <li>
            <NavLink to="/people">
              <img src={people} alt="people" />
            </NavLink>
          </li>
        </Tooltip>

        <Tooltip text="Attendance">
          <li>
            <NavLink to="/attendance">
              <img src={attendance} alt="attendance" />
            </NavLink>
          </li>
        </Tooltip>

        <Tooltip text="Deliverables">
          <li>
            <NavLink to="/deliverables">
              <img src={deliverables} alt="deliverables" />
            </NavLink>
          </li>
        </Tooltip>

        {isAdmin &&
          <Tooltip text="Admin">
            <li>
              <NavLink to="/admin">
                <img src={admin} alt="admin" />
              </NavLink>
            </li>
          </Tooltip>
        }

        <Tooltip text="Profile">
          <li>
            <NavLink to="/profile">
              <img src={profile} alt="profile" />
            </NavLink>
          </li>
        </Tooltip>

        <Tooltip text="Logout">
          <LogoutButton />
        </Tooltip>

      </ul>
    </nav>
  )
}

export default Nav