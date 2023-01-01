import { useState } from 'react'

// Need to pass handle functions down to component
const Form = ({ inputFields, handleSubmit }) => {
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

  const test = Object.keys(inputFields)
  console.log('keys in inputFields object', test)

  Object.keys(inputFields).map((key) => (
    console.log(inputFields[key])
  ))

  const formatLabel = (key) => (
    // RegEx Source: https://tinyurl.com/2cyyreb4
    key.charAt(0).toUpperCase() + key.slice(1).replace(/[A-Z]/g, ' $&').trim()
  )

  return (
    <form onSubmit={handleSubmit}>

      {Object.keys(inputFields).map((key) => (
        <div key={key}>
          <label htmlFor={key}>
            {formatLabel(key)}
          </label>
          <input
            id={key}
            name={key}
            onChange={handleChange}
            //? type={}
            //? required={}
            value={formData[key] || ''}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
