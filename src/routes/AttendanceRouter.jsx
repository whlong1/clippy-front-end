import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import AttendanceMenu from '../features/Attendance/AttendanceMenu.jsx'

const AttendanceRouter = () => {
  return (
    <Routes>
      <Route element={<ContentLayout menu={<AttendanceMenu />} />}>
        <Route index element={<h1>Attendance Landing</h1>} />
        <Route path=':id' element={<h1>Attendance Details</h1>} />
      </Route>
    </Routes>
  )
}

export default AttendanceRouter