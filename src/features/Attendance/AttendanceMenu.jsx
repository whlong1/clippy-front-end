import { Link } from 'react-router-dom'

// Components
import MyAttendance from './MyAttendance'
import AttendanceList from './AttendanceList'
import MenuLayout from '../../layouts/MenuLayout'

import { useIndexAttendance } from '../../hooks/useIndexAttendance'

const AttendanceMenu = (props) => {
  const { attendance, status } = useIndexAttendance(props.cohortId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const adminContent = (
    <>
      <Link to='/attendance/new'><button>New Attendance</button></Link>
      <AttendanceList attendance={attendance} />
    </>
  )

  return (
    <MenuLayout {...props}>
      <p>Attendance Menu</p>

      {props.user.isAdmin
        ? { adminContent }
        : <MyAttendance attendance={attendance} />
      }

    </MenuLayout>
  )
}

export default AttendanceMenu