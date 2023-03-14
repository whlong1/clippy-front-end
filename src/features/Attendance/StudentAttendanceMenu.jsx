// Components
import AttendanceList from './AttendanceList'
import MenuLayout from '../../layouts/MenuLayout'
import MenuStatus from '../../components/MenuStatus/MenuStatus'

// Hooks
import { useIndexStudentAttendance } from '../../hooks/useIndexStudentAttendance'

const StudentAttendanceMenu = (props) => {
  const { profile, cohortId } = props
  const { attendance, status } = useIndexStudentAttendance(cohortId, profile._id)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  const statusArr = ['P', 'A', 'L', 'W', 'EC', 'SC', 'H']
  const attendanceTable = statusArr.reduce((table, val) => {
    const tableKey = val.toLocaleLowerCase()
    table[tableKey] = attendance.filter((a) => (
      a.students.length ? a.students[0].status === val : false
    )).length
    return table
  }, {})

  console.log('attendance table', attendanceTable)

  // 3 Lates  =  1 absence
  // 1 absence = -.5
  // 1 late = -.33

  return (
    <MenuLayout {...props}>
      <span>
        <h1>My Attendance</h1>
      </span>

      {/* <section>
        <h2>Total Absences</h2>
      </section> */}

      <AttendanceList attendance={attendance} />

    </MenuLayout>
  )
}

export default StudentAttendanceMenu