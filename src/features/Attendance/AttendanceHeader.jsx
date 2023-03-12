// Assets
import notesIcon from '../../assets/icons/headers/notes.svg'
import takenIcon from '../../assets/icons/headers/takenby.svg'
import completionIcon from '../../assets/icons/headers/completion.svg'

const AttendanceHeader = (props) => {
  const {
    user,
    isOpen,
    setIsOpen,
    attendance,
    formattedDate,
    handleRedirect,
  } = props

  const studentCount = attendance.students.length
  const percentPresent = attendance.students.reduce((acc, student) => {
    if (student.status === 'A') acc = acc - 1
    if (student.status === 'L') acc = acc - .5
    return acc
  }, studentCount)

  const attendanceRate = (percentPresent / studentCount) * 100

  return (
    <header className='header'>
      <section>
        <h1>{formattedDate} {attendance.time}</h1>
        {user.isAdmin && <button onClick={handleRedirect}>Edit</button>}
        {user.isAdmin && <button onClick={() => setIsOpen(!isOpen)}>Delete</button>}
      </section>
      <section>
        <div className="subheader">
          <h3>
            <img src={takenIcon} alt="writing" />
            Taken By
          </h3>
          <p>{attendance.takenBy.slice(0, 20)}</p>
        </div>
        <div className="subheader">
          <h3>
            <img src={completionIcon} alt="completion circle" />
            Attendance Rate
          </h3>
          <p>{attendanceRate}% Attendance</p>
        </div>
        <div className="subheader">
          <h3>
            <img src={notesIcon} alt="notes" />
            Notes
          </h3>
          <p>{attendance.notes ? attendance.notes : 'Not Available'}</p>
        </div>
      </section>
    </header>
  )
}

export default AttendanceHeader