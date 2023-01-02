import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../features/People/components/PeopleMenu'
import PersonDetails from '../features/People/components/PersonDetails'

const PeopleRouter = (props) => {
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