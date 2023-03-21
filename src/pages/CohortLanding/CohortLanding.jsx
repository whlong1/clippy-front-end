import "./CohortLanding.css"

// Components
import ContentStatus from "../../components/ContentStatus/ContentStatus"

// Hooks
import { useIndexCohorts } from "../../hooks/useIndexCohorts"

// Assets
import BlueOnBlackSq from "../../assets/logos/logotypes/logotype-sq-b-dark.svg"

const CohortLanding = (props) => {
  const { profile } = props
  const { cohorts, status } = useIndexCohorts()

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const currentCohort = cohorts.find((c) => c._id === profile.cohort)

  return (
    <main className="cohortLanding">
      <header>
        <h1>Welcome back to {currentCohort.name}</h1>
      </header>
      <section>
        <img src={BlueOnBlackSq} alt="Abstract flamingo" />
      </section>
    </main>
  )
}

export default CohortLanding