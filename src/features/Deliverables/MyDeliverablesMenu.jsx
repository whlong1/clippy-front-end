import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import { useMyDeliverables } from '../../hooks/useMyDeliverables'

const MyDeliverablesMenu = (props) => {
  // Student DeliverablesMenu View
  const { cohortId, profile } = props
  const { myDeliverables, status } = useMyDeliverables(cohortId, profile._id)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  console.log('My deliverables:', myDeliverables)

  return (
    <MenuLayout {...props}>
      <p>My Deliverables Menu</p>
      <p>Percent Complete</p>
      <p>Upcoming Deliverables</p>
      <p>New Feedback</p>

      {myDeliverables.map((sd) => (
        <Link key={sd._id} to={`/deliverables/${sd._id}`}>
          {sd.name}
        </Link>
      ))}

    </MenuLayout>
  )
}

export default MyDeliverablesMenu