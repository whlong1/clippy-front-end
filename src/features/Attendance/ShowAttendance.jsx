import { useParams, useNavigate } from 'react-router-dom'

// Components
import StudentStatusRow from './StudentStatusRow'

// Hooks
import { useShowAttendance } from '../../hooks/useShowAttendance'
import { useAttendanceManager } from '../../hooks/useAttendanceManager'

const ShowAttendance = ({ cohortId }) => {
  const navigate = useNavigate()
  const { attendanceId } = useParams()
  const mutation = useAttendanceManager(cohortId)
  const { attendance, status } = useShowAttendance(attendanceId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  console.log('Attendance DETAILS', attendance)

  const handleDelete = () => {
    mutation.mutate({ type: 'remove', payload: { attendanceId } })
    navigate('/attendance')
  }

  return (
    <section>
      <h1>Attendance Details</h1>
      <button onClick={handleDelete}>Delete</button>
      {attendance.students.map((student) => (
        <StudentStatusRow key={student._id} student={student} />
      ))}
    </section>
  )
}

export default ShowAttendance