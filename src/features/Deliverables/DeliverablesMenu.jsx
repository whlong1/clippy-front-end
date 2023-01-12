import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import DeliverablesList from './DeliverablesList'
import MenuStatus from '../../components/MenuStatus/MenuStatus'

// Hooks 
import { useIndexDeliverables } from '../../hooks/useIndexDeliverables'

const DeliverablesMenu = (props) => {
  const { deliverables, status } = useIndexDeliverables(props.cohortId)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  return (
    <MenuLayout {...props}>
      <h1>Deliverables Menu</h1>

      <Link to='/deliverables/new'>
        <button>New Deliverable</button>
      </Link>

      <DeliverablesList deliverables={deliverables} />

    </MenuLayout>
  )
}

export default DeliverablesMenu