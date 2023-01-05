import { useParams } from "react-router-dom"

const MyDeliverableDetails = (props) => {
  // conditionally render 2 views here (pre/post submit)
  // from here, make a request to router.get('/:sdId/view', deliverablesCtrl.showStudentDeliverable)
  const { studentDeliverableId } = useParams()
  console.log('studentDeliverableId', studentDeliverableId)

  return (
    <section>
      <p>My Deliverable Details</p>
      <p>due date</p>
      <p>requirements/urls</p>
      <p>status</p>
      <p>feedback</p>
      <p>submission materials</p>
      <button>Update Deliverable</button>
    </section>
  )
}

export default MyDeliverableDetails