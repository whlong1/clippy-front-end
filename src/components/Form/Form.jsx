import { useState } from 'react'

// Need to pass handle functions down to component
const Form = ({ fields, handleSubmit }) => {
  const [formData, setFormData] = useState({})

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  // Goal: drop entire schema's in a data file, programatically generate form

  // Need to:
  // check for type boolean - set default
  // check for props like lowercase true
  // check for props like enum and default
  // could build different cb functions to produce different inputs types

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
