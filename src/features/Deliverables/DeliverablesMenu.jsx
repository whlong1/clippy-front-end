import { Link } from 'react-router-dom'
import MenuLayout from '../../layouts/MenuLayout'

const DeliverablesMenu = (props) => {
  const { deliverables } = props
  console.log('Deliverables:', deliverables)

  return (
    <MenuLayout {...props}>
      <p>Deliverables Menu</p>

      <Link to='/deliverables/new'>
        <button>New Deliverable</button>
      </Link>

    </MenuLayout>
  )
}

export default DeliverablesMenu