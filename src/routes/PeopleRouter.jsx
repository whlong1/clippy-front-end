import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import PeopleMenu from '../resources/People/PeopleMenu'
import PersonDetails from '../resources/People/PersonDetails'

const PeopleRouter = () => {
  return (
    <Routes>
      <Route element={<ContentLayout menu={<PeopleMenu />} />}>
        <Route index element={<h1>People Landing</h1>} />
        <Route path=':id' element={<PersonDetails />} />
      </Route>
    </Routes>
  )
}

export default PeopleRouter