import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'

const AdminMenu = (props) => {

  return (
    <MenuLayout {...props}>
      <span><h1>Admin</h1></span>
      <Link to='/admin/cohorts'>Cohorts</Link>
      <Link to='/admin/profiles'>Profiles</Link>
    </MenuLayout>
  )
}

export default AdminMenu