import { useNavigate } from "react-router-dom"

// Components
import AttendanceForm from "./AttendanceForm"

// Hooks
import { useAttendanceManager } from "../../hooks/useAttendanceManager"

const NewAttendance = ({ cohortId, profile }) => {
  const navigate = useNavigate()
  const mutation = useAttendanceManager(cohortId)

  const handleCreate = (formData) => {
    mutation.mutate({ type: 'create', payload: formData })
    navigate('/attendance')
  }

  return (
    <section className="formContainer">
      <AttendanceForm
        profile={profile}
        cohortId={cohortId}
        title="New Attendance"
        submitFn={handleCreate}
      />
    </section>
  )
}

export default NewAttendance