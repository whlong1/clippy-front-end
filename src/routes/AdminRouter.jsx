import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import Cohorts from '../features/Admin/Cohorts.jsx'
import NewCohort from '../features/Admin/NewCohort.jsx'
import ContentLayout from '../layouts/ContentLayout.jsx'
import AdminMenu from '../features/Admin/AdminMenu.jsx'
import FeatureLanding from '../components/FeatureLanding/FeatureLanding.jsx'

const AdminRouter = (props) => {
  const { user } = props

  if (!user.isAdmin) { return <Navigate to="/" /> }

  // Admin Routes:
  return (
    <Routes>
      <Route element={<ContentLayout menu={<AdminMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="Admin" />} />
        <Route path='cohorts' element={<Cohorts {...props} />} />
        <Route path='cohorts/new' element={<NewCohort {...props} />} />
        <Route path='squads' element={<section>Squad Manager</section>} />
        <Route path='profiles' element={<section>Profile List</section>} />
      </Route>
    </Routes>
  )
}

export default AdminRouter