import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../features/People/components/PeopleMenu'
import PersonDetails from '../features/People/components/PersonDetails'

// Hooks
import { usePeople } from '../hooks/usePeople.js'

const PeopleRouter = (props) => {
  const { cohortId } = props
  const { people, status } = usePeople(cohortId)

  console.log('People in selected cohort', people)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu {...props} />} />}>
        <Route index element={<h1>People Landing</h1>} />
        <Route path=':id' element={<PersonDetails />} />
      </Route>
    </Routes>
  )
}

export default PeopleRouter