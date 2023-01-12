import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../features/People/PeopleMenu'
import ShowPerson from '../features/People/ShowPerson'

const PeopleRouter = (props) => {
  const { user, cohortId } = props

  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu {...props} />} />}>

        <Route index element={<section>People Landing</section>} />
        <Route path=':profileId' element={<ShowPerson user={user} cohortId={cohortId} />} />

      </Route>
    </Routes>
  )
}

export default PeopleRouter