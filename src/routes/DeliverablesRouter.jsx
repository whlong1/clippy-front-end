import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewDeliverable from '../features/Deliverables/NewDeliverable'
import DeliverablesMenu from '../features/Deliverables/DeliverablesMenu.jsx'

// Hooks
import { useDeliverables } from '../hooks/useDeliverables.js'

const DeliverablesRouter = (props) => {
  const { user, cohortId } = props
  const { deliverables, status } = useDeliverables(cohortId)

  const menuProps = {
    ...props,
    deliverables,
  }
  
  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>
  
  return (
    <Routes>
      <Route element={<ContentLayout menu={<DeliverablesMenu {...menuProps} />} />}>
        <Route index element={<h1>Deliverables Landing</h1>} />
        <Route path='new' element={<NewDeliverable cohortId={cohortId} />} />
        <Route path=':deliverableId' element={<h1>Deliverables Details</h1>} />
      </Route>
    </Routes>
  )
}

export default DeliverablesRouter