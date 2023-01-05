import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
// import { useDeliverables } from '../../hooks/useDeliverables'

const MyDeliverablesMenu = (props) => {
  // Student DeliverablesMenu View
  const { deliverables, status } = useDeliverables(cohortId)
  console.log('My deliverables:', deliverables)


  return (
    <MenuLayout {...props}>
      <p>My Deliverables Menu</p>


    </MenuLayout>
  )
}

export default MyDeliverablesMenu