// Hooks
import { useIndexCohorts } from '../../hooks/useIndexCohorts'

const SelectCohort = (props) => {
  const { cohorts, status } = useIndexCohorts()
  const { user, cohortId, setCohortId } = props

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const currentCohort = cohorts.find((c) => c._id === cohortId)

  const optionsArr = user.isAdmin
    ? [currentCohort, ...cohorts.filter((c) => c._id !== cohortId)]
    : [currentCohort]

  const handleChange = ({ target }) => {
    setCohortId(target.value)
  }

  return (
    <select onChange={handleChange} disabled={!user.isAdmin}>
      {optionsArr.map((c) => (
        <option key={c._id} value={c._id}>{c.name}</option>
      ))}
    </select>
  )
}

export default SelectCohort