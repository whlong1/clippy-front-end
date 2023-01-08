import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import AdminMenu from '../features/Admin/AdminMenu.jsx'

const AdminRouter = (props) => {

  // Admin Routes:
  return (
    <Routes>
      <Route element={<ContentLayout menu={<AdminMenu {...props} />} />}>
        <Route index element={<h1>Admin Landing</h1>} />
        <Route path='cohorts' element={<h1>Cohort List</h1>} />
        <Route path='squads' element={<h1>Squad Manager</h1>} />
        <Route path='profiles' element={<h1>Profile List</h1>} />
      </Route>
    </Routes>
  )
}

export default AdminRouter