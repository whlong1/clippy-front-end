import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'

const AdminMenu = (props) => {

  return (
    <MenuLayout {...props}>
      <p>Admin Menu</p>
      <Link to='/admin/cohorts'><button>Cohorts</button></Link>
      <Link to='/admin/profiles'><button>Profiles</button></Link>
      <Link to='/admin/squads'><button>Squads</button></Link>
    </MenuLayout>
  )
}

export default AdminMenu