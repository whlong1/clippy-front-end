import { useState, useEffect } from 'react'

import * as cohortService from '../../../services/cohortService'

const SelectCohort = ({ profileId }) => {
  const [cohorts, setCohorts] = useState([])
  const [selectedCohortId, setSelectedCohortId] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const fetchCohorts = async () => {
      const res = await cohortService.indexCohorts()
      setCohorts(res)
    }
    fetchCohorts()
  }, [])

  console.log(cohorts)
  console.log(selectedCohortId)

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={({ target }) => setSelectedCohortId(target.value)}>
        {cohorts.map((c) => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>
      <button type="submit">Join Cohort</button>
    </form>
  )
}

export default SelectCohort