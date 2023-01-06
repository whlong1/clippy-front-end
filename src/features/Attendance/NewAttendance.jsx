import { useState, useEffect } from "react"

// Components
import StudentStatusSelect from "./StudentStatusSelect"

// Hooks
import { useIndexPeople } from "../../hooks/useIndexPeople"
import { useAttendanceManager} from "../../hooks/useAttendanceManager"

// Helpers
import { buildStatusArray } from "./helpers/helpers"

const NewAttendance = (props) => {
  const { cohortId } = props
  const { people, status } = useIndexPeople(cohortId)

  const mutation = useAttendanceManager(cohortId)
  const [studentData, setStudentData] = useState([])
  const [attendanceData, setAttendanceData] = useState({
    date: '', notes: '', time: 'AM',
  })

  useEffect(() => {
    if (people) { setStudentData(buildStatusArray(people)) }
  }, [cohortId, people])

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const handleChange = ({ target }) => {
    setAttendanceData({ ...attendanceData, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      ...attendanceData,
      cohort: cohortId,
      students: studentData,
      takenBy: 'You really need to update this value in NewAttendance.jsx',
    }
    console.log('Attendance Form Data:', formData)
    mutation.mutate({ type: 'create', payload: formData })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Attendance</h1>
      <label htmlFor="date">Date:</label>
      <input
        required
        id="date"
        name="date"
        type="date"
        onChange={handleChange}
        value={attendanceData.date}
      />
      <label htmlFor="time">Time:</label>
      <select
        id="time"
        name="time"
        onChange={handleChange}
        value={attendanceData.time}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <label htmlFor="notes">Notes:</label>
      <input
        id="notes"
        type="text"
        name="notes"
        onChange={handleChange}
        value={attendanceData.notes}
      />

      <StudentStatusSelect studentData={studentData} setStudentData={setStudentData} />

      <button type="submit">Submit Attendance</button>
    </form>
  )
}

export default NewAttendance