import { useLocation, Navigate } from 'react-router-dom'

// Assets 
import completionIcon from '../../assets/icons/headers/completion.svg'

const AttendanceByMonth = () => {
  const { state } = useLocation()

  if (!state) return <Navigate to="/attendance" />
  if (!state[0].students.length) return <Navigate to="/attendance" />

  const lookup = {
    L: 'Late',
    A: 'Absent',
    H: 'Holiday',
    P: 'Present',
    EC: 'Exception',
    SC: 'School Closed',
  }

  const totalDays = state.length
  const presentCount = state.reduce((acc, day) => {
    const studentStatus = day.students[0].status
    if (studentStatus === 'A') acc = acc - 1
    if (studentStatus === 'L') acc = acc - .5
    return acc
  }, totalDays)

  const attendanceRate = totalDays ? (presentCount / totalDays) * 100 : 0

  return (
    <section>
      <header className='header'>
        <section>
          <h1>Month</h1>
        </section>
        <section>
          <div className="subheader">
            <h3>
              <img src={completionIcon} alt="completion circle" />
              Attendance Rate
            </h3>
            <p>{attendanceRate.toFixed(2)} % Attendance</p>
          </div>
        </section>
      </header>

      <section>
        {state.map((attendance) => (
          <div className="row" key={attendance._id}>
            <p>{attendance.friendlyDate} - {attendance.time}</p>
            <p style={{ marginLeft: 'auto' }}>{lookup[attendance.students[0].status]}</p>
          </div>
        ))}
      </section>

    </section>
  )
}

export default AttendanceByMonth