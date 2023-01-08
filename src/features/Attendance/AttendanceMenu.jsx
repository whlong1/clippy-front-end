import { Link } from 'react-router-dom'

// Components
import AttendanceList from './AttendanceList'
import MenuLayout from '../../layouts/MenuLayout'

// Hooks
import { useIndexAttendance } from '../../hooks/useIndexAttendance'

const AttendanceMenu = (props) => {
  const { attendance, status } = useIndexAttendance(props.cohortId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <MenuLayout {...props}>
      <p>Attendance Menu</p>
      <Link to='/attendance/new'><button>New Attendance</button></Link>
      <AttendanceList attendance={attendance} />
    </MenuLayout>
  )
}

export default AttendanceMenu