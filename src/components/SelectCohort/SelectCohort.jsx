const SelectCohort = (props) => {
  const { cohorts, user, cohortId, setCohortId } = props
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