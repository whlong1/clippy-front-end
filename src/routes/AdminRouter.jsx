import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import Profiles from '../features/Admin/Profiles.jsx'
import Cohorts from '../features/Admin/Cohorts.jsx'
import CohortForm from '../features/Admin/CohortForm.jsx'
import ContentLayout from '../layouts/ContentLayout.jsx'
import AdminMenu from '../features/Admin/AdminMenu.jsx'
import FeatureLanding from '../components/FeatureLanding/FeatureLanding.jsx'

const AdminRouter = (props) => {
  const { user } = props

  if (!user.isAdmin) { return <Navigate to="/" /> }

  return (
    <Routes>
      <Route element={<ContentLayout menu={<AdminMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="Admin" />} />
        <Route path='profiles' element={<Profiles />} />
        <Route path='cohorts' element={<Cohorts {...props} />} />
        <Route path='cohorts/new' element={<CohortForm {...props} />} />
        <Route path='cohorts/edit' element={<CohortForm {...props} />} />
      </Route>
    </Routes>
  )
}

export default AdminRouter