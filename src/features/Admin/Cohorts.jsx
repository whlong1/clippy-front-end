import { Link } from 'react-router-dom'

// Components
import ContentStatus from '../../components/ContentStatus/ContentStatus'

// Hooks
import { useIndexCohorts } from "../../hooks/useIndexCohorts"

const Cohorts = () => {
  const { cohorts, status } = useIndexCohorts()

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  console.log(cohorts)
  return (
    <section>
      <h1>Cohorts</h1>
      <Link to="/admin/cohorts/new">New Cohort</Link>

      <h2>Cohort List</h2>
      {cohorts.map((c) => (
        <div key={c._id}>
          <p>{c.name}</p>
          <p>{c.startDate.slice(0, 10)} - {c.endDate.slice(0, 10)}</p>
          <Link to="/admin/cohorts/edit" state={c} >
            <button>Edit</button>
          </Link>
        </div>
      ))}


    </section>
  )
}

export default Cohorts