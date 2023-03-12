import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Components
import StudentStatusSelect from "./StudentStatusSelect"

// Hooks
import { useIndexPeople } from "../../hooks/useIndexPeople"

// Helpers
import { buildStatusArray, handleDate } from "./helpers/helpers"

const AttendanceForm = ({ cohortId, profile, submitFn, prevAttendance }) => {
  const { attendanceId } = useParams()
  const [studentData, setStudentData] = useState([])
  const { people, status } = useIndexPeople(cohortId)
  const [attendanceData, setAttendanceData] = useState({
    date: handleDate(), notes: '', time: 'AM',
  })

  useEffect(() => {
    if (prevAttendance) {
      const formattedDate = handleDate(prevAttendance.date)
      setAttendanceData({ ...prevAttendance, date: formattedDate })
      setStudentData(prevAttendance.students)
    } else {
      setStudentData(buildStatusArray(people))
    }
  }, [cohortId, attendanceId, people, prevAttendance])

  // No need for ContentStatus component here
  // Form is already wrapped with a <section> tag through New/EditAttendance
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
      takenBy: profile.name,
    }
    submitFn(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <h2>Students</h2>
      <StudentStatusSelect studentData={studentData} setStudentData={setStudentData} />

      <button type="submit">Submit Attendance</button>
    </form>
  )
}

export default AttendanceForm