import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import DeliverablesList from './DeliverablesList'

const DeliverablesMenu = (props) => {
  const { deliverables } = props
  console.log('Deliverables:', deliverables)

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