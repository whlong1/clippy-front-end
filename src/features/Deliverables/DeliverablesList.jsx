import { Link } from 'react-router-dom'

const DeliverablesList = (props) => {
  const { deliverables } = props
  // Left hand menu component 
  return (
    deliverables.map((d) => (
      <Link key={d._id} to={`/deliverables/${d._id}`}>
        <p>{d.name}</p>
      </Link>
    ))
  )
}

export default DeliverablesList