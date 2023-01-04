import { useState, useEffect } from "react"

// Components
import StudentStatus from "./StudentStatus"

// Hooks
import { usePeople } from "../../hooks/usePeople"
import { useManageAttendance } from "../../hooks/useManageAttendance"

// Helpers
import { buildStatusArray } from "./helpers/helpers"

const NewAttendance = (props) => {
  const { cohortId } = props
  const { people, status } = usePeople(cohortId)
  const mutation = useManageAttendance(cohortId)
  const [studentData, setStudentData] = useState([])
  const [attendanceData, setAttendanceData] = useState({
    date: '', notes: '', time: 'AM',
  })

  useEffect(() => {
    if (people) { setStudentData(buildStatusArray(people)) }
  }, [cohortId, people])


  const handleChange = ({ target }) => {
    setAttendanceData({ ...attendanceData, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      ...attendanceData,
      cohort: cohortId,
      // CHANGE THIS !!!!:::::
      takenBy: 'Hunter',
      students: [],
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

      <StudentStatus studentData={studentData} setStudentData={setStudentData} />

      <button type="submit">Submit Attendance</button>
    </form>
  )
}

export default NewAttendance