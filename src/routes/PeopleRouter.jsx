import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../features/People/components/PeopleMenu'
import PersonDetails from '../features/People/components/PersonDetails'

// Hooks
import { usePeople } from '../hooks/usePeople.js'

const PeopleRouter = (props) => {
  const { cohortId } = props
  // Figure out how to update this state:
  const { people, status } = usePeople(cohortId)

  const menuProps = {
    people,
    ...props,
  }

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>


  // console.log('PEOPLE STATE', people)

  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu {...menuProps} />} />}>

        <Route index element={<h1>People Landing</h1>} />
        <Route path=':profileId' element={<PersonDetails cohortId={cohortId} />} />
        
      </Route>
    </Routes>
  )
}

export default PeopleRouter