import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'

const AdminMenu = (props) => {

  return (
    <MenuLayout {...props}>
      <h1>Admin</h1>
      <Link to='/admin/cohorts'><button>Cohorts</button></Link>
      <Link to='/admin/profiles'><button>Profiles</button></Link>
    </MenuLayout>
  )
}

export default AdminMenu