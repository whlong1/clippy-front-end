import { useLocation } from 'react-router-dom'

// Assets 
import completionIcon from '../../assets/icons/headers/completion.svg'

const AttendanceByMonth = () => {
  const { state } = useLocation()

  const attendanceRate = ''

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
            <p>{attendanceRate}% Attendance</p>
          </div>
        </section>
      </header>




    </section>
  )
}

export default AttendanceByMonth