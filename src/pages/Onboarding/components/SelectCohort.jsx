import { useState } from 'react'

const SelectCohort = () => {
  const [formData, setFormData] = useState({})

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <select name="" id="">
        <option value=""></option>
      </select>
    </form>
  )
}

export default SelectCohort