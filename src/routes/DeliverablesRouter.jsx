import { Routes, Route } from 'react-router-dom'

import ContentLayout from '../layouts/ContentLayout.jsx'
import DeliverablesMenu from '../features/Deliverables/DeliverablesMenu.jsx'

const DeliverablesRouter = () => {
  return (
    <Routes>
      <Route element={<ContentLayout menu={<DeliverablesMenu />} />}>
        <Route index element={<h1>Deliverables Landing</h1>} />
        <Route path=':id' element={<h1>Deliverables Details</h1>} />
      </Route>
    </Routes>
  )
}

export default DeliverablesRouter