import { useLocation, Navigate } from 'react-router-dom'

const AttendanceByMonth = () => {
  const { state } = useLocation()

  if (!state) return <Navigate to="/attendance" />

  const lookup = {
    L: 'Late',
    A: 'Absent',
    H: 'Holiday',
    P: 'Present',
    W: 'Withdrawn',
    EC: 'Exception',
    SC: 'School Closed',
  }

  const filteredState = state.filter((attendance) => attendance.students.length)
  
  return (
    <section>
      <header className='header'>
        <section>
          <h1>Month</h1>
        </section>
      </header>

      <section>
        {filteredState.map((attendance) => (
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