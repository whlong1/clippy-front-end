import { useState, useEffect } from "react"

// Components
import StudentStatusRow from "./StudentStatusRow"

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

  // console.log('people', people)
  console.log('STUDENT STATUS ARR', studentData)

  useEffect(() => {
    if (people) {
      setStudentData(buildStatusArray(people))
    }
  }, [cohortId, people])


  const handleChange = ({ target }) => {
    setAttendanceData({ ...attendanceData, [target.name]: target.value })
  }

  const handleChangeStatus = ({ target }, studentId) => {
    setStudentData(studentData.map((s) => {
      return s.studentId === studentId ? { ...s, status: target.value } : s
    }))
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

      {studentData.map((student) => (
        <label key={student.studentId}>
          <select
            name="status"
            defaultValue={student.status}
            onChange={(e) => handleChangeStatus(e, student.studentId)}>
            <option hidden disabled >{student.status}</option>
            <option value="P">P</option>
            <option value="H">H</option>
            <option value="A">A</option>
            <option value="L">L</option>
            <option value="W">W</option>
            <option value="EC">EC</option>
            <option value="SC">SC</option>
          </select>
          {student.name}
        </label>
      ))}


      <button type="submit">Submit Attendance</button>
    </form>
  )
}

export default NewAttendance