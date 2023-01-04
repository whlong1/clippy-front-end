import { useState } from "react"

const NewAttendance = (props) => {
  const [attendanceData, setAttendanceData] = useState({
    date: '',
    notes: '',
    time: 'AM',
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
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        required
        id="date"
        type="date"
        onChange={handleChange}
        value={attendanceData.date}
      />
      <label htmlFor="time">Time:</label>
      <select
        id="time"
        onChange={handleChange}
        value={attendanceData.time}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <label htmlFor="notes">Notes:</label>
      <input
        required
        id="notes"
        type="text"
        onChange={handleChange}
        value={attendanceData.notes}
      />

      <button type="submit">Submit Attendance</button>
    </form>
  )
}

export default NewAttendance