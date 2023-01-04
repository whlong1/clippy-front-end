import { useState } from "react"

// Hooks
import { useManageAttendance } from "../../hooks/useManageAttendance"

const NewAttendance = (props) => {
  const { cohortId } = props
  const mutation = useManageAttendance(cohortId)
  const [attendanceData, setAttendanceData] = useState({
    date: '', notes: '', time: 'AM',
  })

  const handleChange = ({ target }) => {
    setAttendanceData({ ...attendanceData, [target.name]: target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      ...attendanceData,
      cohort: '*********',
      takenBy: '********',
      students: ['*******'],
    }
    console.log('Attendance Form Data:', formData)
    mutation.mutate({ type: 'create', payload: { formData } })
    // ...
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

      <button type="submit">Submit Attendance</button>
    </form>
  )
}

export default NewAttendance