import { Link } from 'react-router-dom'

const DeliverablesList = (props) => {
  const { deliverables } = props
  return (
    deliverables.map((d) => (
      <Link key={d._id} to={`/deliverables/${d._id}`}>
        <p>{d.name}</p>
        <p>
          {d.students.filter((s) => s.status !== 'assigned').length}
          /
          {d.students.length}
        </p>
      </Link>
    ))
  )
}

export default DeliverablesList