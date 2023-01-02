import { useState, useEffect } from 'react'

import * as cohortService from '../../../services/cohortService'

const SelectCohort = () => {
  const [cohorts, setCohorts] = useState([])
  // const [formData, setFormData] = useState({})

  // const handleChange = ({ target }) => {
  //   setFormData({ ...formData, [target.name]: target.value })
  // }

  useEffect(() => {
    const fetchCohorts = async () => {
      const res = await cohortService.indexCohorts()
      setCohorts(res)
    }
    fetchCohorts()
  }, [])

  console.log(cohorts)
  return (
    <form>
      <select name="" id="">
        <option value=""></option>
      </select>
      <button></button>
    </form>
  )
}

export default SelectCohort