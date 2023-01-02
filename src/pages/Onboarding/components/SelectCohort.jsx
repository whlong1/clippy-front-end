import { useState, useEffect } from 'react'
import * as cohortService from '../../../services/cohortService'

const SelectCohort = ({ profile, setProfile }) => {
  const [cohorts, setCohorts] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedCohortId, setSelectedCohortId] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setErrorMsg('')
      const res = await cohortService.addProfileToWaitlist(selectedCohortId, profile._id)
      setProfile(res)
    } catch (err) {
      setErrorMsg(err.message)
    }
  }

  useEffect(() => {
    const fetchCohorts = async () => {
      const res = await cohortService.indexCohorts()
      setCohorts(res)
      if (res.length > 0) setSelectedCohortId(res[0]._id)
    }
    fetchCohorts()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      {errorMsg && <p>{errorMsg}</p>}
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