import { useLocation, Navigate } from 'react-router-dom'

const AttendanceByMonth = () => {
  const { state } = useLocation()

  if (!state) return <Navigate to="/attendance" />
  if (!state[0].students.length) return <Navigate to="/attendance" />

  const lookup = {
    L: 'Late',
    A: 'Absent',
    H: 'Holiday',
    P: 'Present',
    W: 'Withdrawn',
    EC: 'Exception',
    SC: 'School Closed',
  }

  return (
    <section>
      <header className='header'>
        <section>
          <h1>Month</h1>
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