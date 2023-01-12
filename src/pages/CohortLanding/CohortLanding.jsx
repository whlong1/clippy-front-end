import SelectCohort from "../../components/SelectCohort/SelectCohort"

const CohortLanding = (props) => {
  // Could include MenuLayout in here if we like the way that looks.

  return (
    <main className="page">
      <h1>Clippy</h1>
      Welcome back to...
      <SelectCohort {...props} />
    </main>
  )
}

export default CohortLanding