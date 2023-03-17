import './styles/Attendance.css'

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

  const lateScore = attendanceTable.l * 0.33
  const absentScore = attendanceTable.a * 0.5

  const totalDays = attendance.length
  const totalAbsences = (absentScore + lateScore)
  const daysAttended = totalDays - absentScore - lateScore
  const percentage = (daysAttended / totalDays) * 100
  const attendanceRate = !isNaN(percentage) ? percentage.toFixed(2) : 0


  return (
    <MenuLayout {...props}>
      <span>
        <h1>My Attendance</h1>
      </span>

      <section className='attendanceStats'>
        <header>
          <div>
            <h2>Attendance Rate</h2>
            <p>{attendanceRate}%</p>
          </div>
          <div>
            <h2>Total Absences</h2>
            <p>{totalAbsences.toFixed(2)}</p>
          </div>
        </header>
      </section>

      <section className='attendanceByMonth'>
        <header>
          <h2>Attendance By Month</h2>
        </header>
        {attendance.length &&
          <AttendanceList attendance={attendance} />
        }
      </section>
    </MenuLayout>
  )
}

export default StudentAttendanceMenu