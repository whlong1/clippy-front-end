import { useParams } from 'react-router-dom'

// Components
import StudentStatusRow from './StudentStatusRow'

// Hooks
import { useShowAttendance } from '../../hooks/useShowAttendance'

const ShowAttendance = (props) => {
  // const { user, cohortId } = props
  const { attendanceId } = useParams()
  const { attendance, status } = useShowAttendance(attendanceId)

  console.log('Attendance DETAILS', attendance)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <h1>Attendance Details</h1>
      {attendance.students.map((student) => (
        <StudentStatusRow key={student._id} student={student} />
      ))}
    </section>
  )
}

export default ShowAttendance