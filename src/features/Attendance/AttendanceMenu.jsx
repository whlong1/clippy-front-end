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
      <span>
        <h1>Attendance</h1>
        <Link to='/attendance/new'><button>NEW</button></Link>
      </span>
      <AttendanceList attendance={attendance} />
    </MenuLayout>
  )
}

export default AttendanceMenu