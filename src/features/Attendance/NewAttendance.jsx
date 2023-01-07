import { useNavigate } from "react-router-dom"

// Components
import AttendanceForm from "./AttendanceForm"

// Hooks
import { useAttendanceManager } from "../../hooks/useAttendanceManager"

const NewAttendance = ({ cohortId }) => {
  const navigate = useNavigate()
  const mutation = useAttendanceManager(cohortId)

  const handleCreate = (formData) => {
    mutation.mutate({ type: 'create', payload: formData })
    navigate('/attendance')
  }

  return (
    <section>
      <h1>New Attendance</h1>
      <AttendanceForm cohortId={cohortId} submitFn={handleCreate} />
    </section>
  )
}

export default NewAttendance