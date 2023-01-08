// Components
import MenuLayout from '../../layouts/MenuLayout'

// Hooks
import { useIndexStudentAttendance } from '../../hooks/useIndexStudentAttendance'

const StudentAttendanceMenu = (props) => {
  const { profile, cohortId } = props
  const { attendance, status } = useIndexStudentAttendance(cohortId, profile._id)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const statusArr = ['P', 'A', 'L', 'W', 'EC', 'SC', 'H']
  const attendanceTable = statusArr.reduce((table, val) => {
    const tableKey = val.toLocaleLowerCase()
    table[tableKey] = attendance.filter((a) => a.students[0].status === val).length
    return table
  }, {})


  return (
    <MenuLayout {...props}>
      <p>My Attendance</p>
      <p>Present: {attendanceTable.p}</p>
      <p>Absent: {attendanceTable.a}</p>
      <p>Late: {attendanceTable.l}</p>

      {attendance.map((a) => (
        <p>{a.date} ::::{a.students[0].status}</p>
      ))}

    </MenuLayout>
  )
}

export default StudentAttendanceMenu