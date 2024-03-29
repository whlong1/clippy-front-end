import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Components
import StudentStatusSelect from "./StudentStatusSelect"
import ContentStatus from "../../components/ContentStatus/ContentStatus"
// Hooks
import { useIndexPeople } from "../../hooks/useIndexPeople"

// Helpers
import { buildStatusArray, handleDate } from "./helpers/helpers"

const AttendanceForm = ({ cohortId, profile, submitFn, prevAttendance, title }) => {
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

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const handleChange = ({ target }) => {
    setAttendanceData({ ...attendanceData, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      ...attendanceData,
      cohort: cohortId,
      students: studentData,
      takenBy: profile.firstName,
    }
    submitFn(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <header className="header">
        <h1>{title}</h1>
        <button type="submit">SUBMIT</button>
      </header>
      <label htmlFor="date">Date</label>
      <input
        required
        id="date"
        name="date"
        type="date"
        onChange={handleChange}
        value={attendanceData.date}
      />
      <label htmlFor="time">Time</label>
      <select
        id="time"
        name="time"
        onChange={handleChange}
        value={attendanceData.time}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <label htmlFor="notes">Notes</label>
      <input
        id="notes"
        type="text"
        name="notes"
        onChange={handleChange}
        value={attendanceData.notes}
      />

      <h2>Students</h2>
      <StudentStatusSelect studentData={studentData} setStudentData={setStudentData} />
    </form>
  )
}

export default AttendanceForm