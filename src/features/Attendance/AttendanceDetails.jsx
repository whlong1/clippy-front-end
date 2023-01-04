import { useParams } from 'react-router-dom'

// Components
import StudentStatusRow from './StudentStatusRow'

// Hooks
import { useAttendanceDetails } from '../../hooks/useAttendanceDetails'

const AttendanceDetails = (props) => {
  // const { user, cohortId } = props
  const { attendanceId } = useParams()
  const { attendanceDetails, status } = useAttendanceDetails(attendanceId)

  console.log('Attendance DETAILS', attendanceDetails)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <h1>Attendance Details</h1>
      {attendanceDetails.students.map((student) => (
        <StudentStatusRow key={student._id} student={student} />
      ))}
    </section>
  )
}

export default AttendanceDetails