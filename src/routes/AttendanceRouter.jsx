import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewAttendance from '../features/Attendance/NewAttendance'
import AttendanceMenu from '../features/Attendance/AttendanceMenu.jsx'

// Hooks
import { useAttendance } from '../hooks/useAttendance.js'

const AttendanceRouter = (props) => {
  const { user, cohortId } = props
  const { attendance, status } = useAttendance(cohortId)

  const menuProps = {
    ...props,
    attendance,
  }

  return (
    <Routes>
      <Route element={<ContentLayout menu={<AttendanceMenu {...menuProps} />} />}>
        <Route index element={<h1>Attendance Landing</h1>} />
        <Route path='new' element={<NewAttendance cohortId={cohortId} />} />
        <Route path=':attendanceId' element={<h1>Attendance Details</h1>} />
      </Route>
    </Routes>
  )
}

export default AttendanceRouter