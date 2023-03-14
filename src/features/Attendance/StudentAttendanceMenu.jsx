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

  //! Code assumes the following:
  // 1 late = .33
  // 1 absence = .5
  // 3 Lates  =  1 absence

  const lateScore = Math.ceil(attendanceTable.l * 0.33)
  const absentScore = Math.ceil(attendanceTable.a * 0.5)

  const totalDays = attendance.length
  const daysAttended = totalDays - absentScore - lateScore
  const attendancePercentage = (daysAttended / totalDays) * 100

  return (
    <MenuLayout {...props}>
      <span>
        <h1>My Attendance</h1>
      </span>

      <section>
        <h2>Attendance Rate {attendancePercentage.toFixed(2)}%</h2>
        <h2>Absences: {absentScore}</h2>
        <h2>Tardies: {lateScore}</h2>
      </section>

      <AttendanceList attendance={attendance} />

    </MenuLayout>
  )
}

export default StudentAttendanceMenu