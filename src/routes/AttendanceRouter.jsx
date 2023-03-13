import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewAttendance from '../features/Attendance/NewAttendance'
import EditAttendance from '../features/Attendance/EditAttendance.jsx'
import AttendanceMenu from '../features/Attendance/AttendanceMenu.jsx'
import ShowAttendance from '../features/Attendance/ShowAttendance.jsx'
import AttendanceByMonth from '../features/Attendance/AttendanceByMonth.jsx'
import FeatureLanding from '../components/FeatureLanding/FeatureLanding.jsx'
import StudentAttendanceMenu from '../features/Attendance/StudentAttendanceMenu.jsx'

const AttendanceRouter = (props) => {
  const { user, cohortId, profile } = props

  // Student Routes:
  if (!user.isAdmin) return (
    <Routes>
      <Route element={<ContentLayout menu={<StudentAttendanceMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="My Attendance" />} />
        <Route path="/:month" element={<AttendanceByMonth {...props} />} />
        <Route path="/*" element={<Navigate to='/attendance' />} />
      </Route>
    </Routes>
  )

  // Admin Routes:
  return (
    <Routes>
      <Route element={<ContentLayout menu={<AttendanceMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="Attendance" />} />
        <Route path='new' element={<NewAttendance cohortId={cohortId} profile={profile} />} />
        <Route path=':attendanceId' element={<ShowAttendance user={user} cohortId={cohortId} />} />
        <Route path=':attendanceId/edit' element={<EditAttendance cohortId={cohortId} profile={profile} />} />
      </Route>
    </Routes>
  )
}

export default AttendanceRouter