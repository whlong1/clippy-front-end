import { Routes, Route } from 'react-router-dom'

import Menu from '../components/Menu/Menu'
import ContentLayout from '../layouts/ContentLayout.jsx'

const PeopleRouter = () => {
  return (
    <Routes>
      <Route element={<ContentLayout menu={<Menu />} />}>
        <Route index element={<h1>People Landing</h1>} />
        <Route path=':id' element={<h1>Person</h1>} />
      </Route>
    </Routes>
  )
}

export default PeopleRouter