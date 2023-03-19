import { Routes, Route } from 'react-router-dom'

// Components
import PeopleMenu from '../features/People/PeopleMenu'
import ShowPerson from '../features/People/ShowPerson'
import ContentLayout from '../layouts/ContentLayout.jsx'
import FeatureLanding from '../components/FeatureLanding/FeatureLanding.jsx'

const PeopleRouter = (props) => {
  const { user, cohortId } = props

  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="People" />} />
        <Route path=':profileId' element={<ShowPerson user={user} cohortId={cohortId} />} />
      </Route>
    </Routes>
  )
}

export default PeopleRouter