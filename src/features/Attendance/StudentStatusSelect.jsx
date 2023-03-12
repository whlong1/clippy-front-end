import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentStatusSelect = ({ studentData, setStudentData }) => {
  // Is this component name clear enough?
  // This component creates a status select menu for each student

  const handleChange = ({ target }) => {
    setStudentData(studentData.map((s) => {
      return s.studentId === target.id ? { ...s, status: target.value } : s
    }))
  }

  if (!studentData.length) return <h1>Oopsy Daisy! No students!</h1>

  return (
    studentData.map((s) => (
      <div key={s.studentId}>
        <ProfileInfo profile={s} />
        <select name="status" id={s.studentId} defaultValue={s.status} onChange={handleChange}>
          <option hidden disabled >{s.status}</option>
          <option value="P">P</option>
          <option value="H">H</option>
          <option value="A">A</option>
          <option value="L">L</option>
          <option value="W">W</option>
          <option value="EC">EC</option>
          <option value="SC">SC</option>
        </select>
      </div>
    ))
  )
}

export default StudentStatusSelect