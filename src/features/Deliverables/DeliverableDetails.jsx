import { useParams } from 'react-router-dom'

// Hooks
import { useDeliverableDetails } from '../../hooks/useDeliverableDetails'

const DeliverableDetails = (props) => {
  // const { user, cohortId } = props
  const { deliverableId } = useParams()
  const { deliverableDetails, status } = useDeliverableDetails(deliverableId)

  console.log('Deliverable details', deliverableDetails)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <h1>deliverable details</h1>

      {deliverableDetails.name}
    </section>
  )
}

export default DeliverableDetails 