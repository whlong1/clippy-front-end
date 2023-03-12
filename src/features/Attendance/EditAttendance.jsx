import { useNavigate, useParams } from "react-router-dom"

// Components
import AttendanceForm from "./AttendanceForm"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

// Hooks
import { useAttendanceManager } from "../../hooks/useAttendanceManager"
import { useShowAttendance } from '../../hooks/useShowAttendance'

const EditAttendance = ({ cohortId, profile }) => {
  const navigate = useNavigate()
  const { attendanceId } = useParams()
  const mutation = useAttendanceManager(cohortId)
  const { attendance, status } = useShowAttendance(attendanceId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const handleUpdate = (formData) => {
    mutation.mutate({ type: 'update', payload: formData })
    navigate('/attendance')
  }

  return (
    <section className="formContainer">
      <AttendanceForm
        profile={profile}
        cohortId={cohortId}
        submitFn={handleUpdate}
        title="Edit Attendance"
        prevAttendance={attendance}
      />
    </section>
  )
}

export default EditAttendance