import { Link } from 'react-router-dom'

const DeliverablesList = ({ deliverables }) => {

  const displayStatatusCount = (d) => {
    const total = d.students.length
    const completed = d.students.filter((s) => s.status !== 'assigned').length
    return completed + '/' + total
  }

  // Need visual indicator for missing, complet etc
  
  return (
    deliverables.map((d) => (
      <Link key={d._id} to={`/deliverables/${d._id}`}>
        <p>{d.name}</p>
        <p>{displayStatatusCount(d)}</p>
      </Link>
    ))
  )
}

export default DeliverablesList