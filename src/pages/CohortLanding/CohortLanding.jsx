import SelectCohort from "../../components/SelectCohort/SelectCohort"

const CohortLanding = (props) => {

  return (
    <main className="page">
      <h1>Clippy</h1>
      Welcome back to...
      <SelectCohort {...props} />
    </main>
  )
}

export default CohortLanding