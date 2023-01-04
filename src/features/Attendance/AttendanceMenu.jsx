import MenuLayout from '../../layouts/MenuLayout'

const AttendanceMenu = (props) => {
  const { attendance } = props
  console.log('Attendance:', attendance)

  return (
    <MenuLayout {...props}>
      <p>Attendance Menu</p>
    </MenuLayout>
  )
}

export default AttendanceMenu