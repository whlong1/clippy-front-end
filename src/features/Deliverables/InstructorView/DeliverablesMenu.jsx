import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../../layouts/MenuLayout'
import MenuStatus from '../../../components/MenuStatus/MenuStatus'
import DeliverablesList from './DeliverablesList'

// Hooks 
import { useIndexDeliverables } from '../../../hooks/useIndexDeliverables'

const DeliverablesMenu = (props) => {
  const { deliverables, status } = useIndexDeliverables(props.cohortId)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  return (
    <MenuLayout {...props}>
      <span>
        <h1>Deliverables</h1>
        <Link to='/deliverables/new'>
          <button>NEW</button>
        </Link>
      </span>
      <DeliverablesList deliverables={deliverables} />
    </MenuLayout>
  )
}

export default DeliverablesMenu