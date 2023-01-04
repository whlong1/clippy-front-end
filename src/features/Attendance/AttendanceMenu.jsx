import { Link } from 'react-router-dom'

// Components
import AttendanceList from './AttendanceList'
import MenuLayout from '../../layouts/MenuLayout'

const AttendanceMenu = (props) => {
  const { attendance } = props

  console.log('ATT MENU ATT', attendance)
  return (
    <MenuLayout {...props}>
      <p>Attendance Menu</p>
      <Link to='/attendance/new'>
        <button>New Attendance</button>
      </Link>


      <AttendanceList attendance={attendance} />

    </MenuLayout>
  )
}

export default AttendanceMenu