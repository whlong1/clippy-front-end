import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewAttendance from '../features/Attendance/NewAttendance'
import EditAttendance from '../features/Attendance/EditAttendance.jsx'
import AttendanceMenu from '../features/Attendance/AttendanceMenu.jsx'
import ShowAttendance from '../features/Attendance/ShowAttendance.jsx'

const AttendanceRouter = (props) => {
  const { user, cohortId } = props

  return (
    <Routes>
      <Route element={<ContentLayout menu={<AttendanceMenu {...props} />} />}>
        <Route index element={<h1>Attendance Landing</h1>} />
        <Route path='new' element={<NewAttendance cohortId={cohortId} />} />
        <Route path=':attendanceId/edit' element={<EditAttendance cohortId={cohortId} />} />
        <Route path=':attendanceId' element={<ShowAttendance user={user} cohortId={cohortId} />} />
      </Route>
    </Routes>
  )
}

export default AttendanceRouter