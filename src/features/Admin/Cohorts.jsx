import { Link } from 'react-router-dom'
import './styles/Admin.css'

// Components
import ContentStatus from '../../components/ContentStatus/ContentStatus'

// Hooks
import { useIndexCohorts } from "../../hooks/useIndexCohorts"

const Cohorts = () => {
  const { cohorts, status } = useIndexCohorts()

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  return (
    <section className="cohorts">
      <header className="header">
        <section>
          <h1>Cohorts</h1>
          <Link to="/admin/cohorts/new">
            <button>
              New Cohort
            </button>
          </Link>
        </section>
      </header>

      <section>
        {cohorts.map((c) => (
          <div className="row" key={c._id}>
            <p>{c.name}</p>
            <p>{c.startDate.slice(0, 10)} - {c.endDate.slice(0, 10)}</p>
            <Link to="/admin/cohorts/edit" state={c} >
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Cohorts