const SelectCohort = (props) => {
  const { cohorts, user, cohortId } = props
  const currentCohort = cohorts.find((c) => c._id === cohortId)

  const optionsArr = user.isAdmin
    ? [currentCohort, ...cohorts.filter((c) => c._id !== cohortId)]
    : [currentCohort]

  return (
    <select disabled={!user.isAdmin}>
      {optionsArr.map((c) => (
        <option key={c._id} value={c._id}>{c.name}</option>
      ))}
    </select>
  )
}

export default SelectCohort