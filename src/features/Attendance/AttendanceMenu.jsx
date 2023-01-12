import { Link } from 'react-router-dom'

// Components
import AttendanceList from './AttendanceList'
import MenuLayout from '../../layouts/MenuLayout'
import MenuStatus from '../../components/MenuStatus/MenuStatus'

// Hooks
import { useIndexAttendance } from '../../hooks/useIndexAttendance'

const AttendanceMenu = (props) => {
  const { attendance, status } = useIndexAttendance(props.cohortId)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  return (
    <MenuLayout {...props}>
      <p>Attendance Menu</p>
      <Link to='/attendance/new'><button>New Attendance</button></Link>
      <AttendanceList attendance={attendance} />
    </MenuLayout>
  )
}

export default AttendanceMenu