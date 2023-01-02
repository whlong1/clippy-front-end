import { useState } from 'react'

const SelectCohort = () => {
  const [formData, setFormData] = useState({})

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

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