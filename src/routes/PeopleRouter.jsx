import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../features/People/PeopleMenu'
import PersonDetails from '../features/People/PersonDetails'

const PeopleRouter = (props) => {
  const { user, cohortId } = props

  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu {...props} />} />}>

        <Route index element={<h1>People Landing</h1>} />
        <Route path=':profileId' element={<PersonDetails user={user} cohortId={cohortId} />} />

      </Route>
    </Routes>
  )
}

export default PeopleRouter