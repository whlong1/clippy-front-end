import { Link } from 'react-router-dom'

// Components
import ContentStatus from '../../components/ContentStatus/ContentStatus'

// Hooks
import { useIndexCohorts } from "../../hooks/useIndexCohorts"

const Cohorts = () => {
  const { cohorts, status } = useIndexCohorts()

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  return (
    <section>
      <h1>Cohorts</h1>

      <h2>Cohort List</h2>
      {cohorts.map((c) => (
        <div>
          <p key={c._id}>{c.name}</p>
          <Link to="/admin/cohorts/edit" >
            <button>Edit</button>
          </Link>
        </div>
      ))}

      <Link to="/admin/cohorts/new">New Cohort</Link>

    </section>
  )
}

export default Cohorts