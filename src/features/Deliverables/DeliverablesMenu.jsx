import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import DeliverablesList from './DeliverablesList'

// Hooks 
import { useIndexDeliverables } from '../../hooks/useIndexDeliverables'

const DeliverablesMenu = (props) => {
  const { deliverables, status } = useIndexDeliverables(props.cohortId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>


  console.log('Deliverables:', deliverables)

  // Create instructor view & student view

  return (
    <MenuLayout {...props}>
      <p>Deliverables Menu</p>

      <Link to='/deliverables/new'>
        <button>New Deliverable</button>
      </Link>

      <DeliverablesList deliverables={deliverables} />

    </MenuLayout>
  )
}

export default DeliverablesMenu