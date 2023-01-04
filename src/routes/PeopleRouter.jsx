import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../features/People/PeopleMenu'
import PersonDetails from '../features/People/PersonDetails'

// Hooks
import { usePeople } from '../hooks/usePeople.js'

const PeopleRouter = (props) => {
  const { user, cohortId } = props
  const { people, status } = usePeople(cohortId)

  const menuProps = {
    people,
    ...props,
  }

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu {...menuProps} />} />}>

        <Route index element={<h1>People Landing</h1>} />
        <Route path=':profileId' element={<PersonDetails user={user} cohortId={cohortId} />} />

      </Route>
    </Routes>
  )
}

export default PeopleRouter