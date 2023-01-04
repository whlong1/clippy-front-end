import { Link } from 'react-router-dom'
import MenuLayout from '../../layouts/MenuLayout'

const AttendanceMenu = (props) => {
  const { attendance } = props
  console.log('Attendance:', attendance)

  return (
    <MenuLayout {...props}>
      <p>Attendance Menu</p>

      <Link to='/attendance/new'>
        <button>New Attendance</button>
      </Link>


    </MenuLayout>
  )
}

export default AttendanceMenu