const NewAttendance = (props) => {
  const [attendanceData, setAttendanceData] = useState({
    date: '',
    notes: '',
    time: 'AM',
    cohort: '*********',
    takenBy: '********',
  })

  const handleChange = ({ target }) => {
    setAttendanceData({ ...formData, [target.name]: target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        required
        id="date"
        type="date"
        value={attendanceData.date}
        onChange={handleChange}
      />
      <label htmlFor="time">Time:</label>
      <select
        id="time"
        value={attendanceData.time}
        onChange={handleChange}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <label htmlFor="notes">Notes:</label>
      <input
        required
        type="text"
        id="notes"
        value={attendanceData.notes}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewAttendance