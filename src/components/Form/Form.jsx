import { useState } from 'react'

// Helpers
import {
  isRequired,
  formatLabel,
  formatInputType,
  handleInitialState,
} from './helpers'

// NOT IN USE
const Form = ({ inputFields, handleSubmit }) => {
  // TODO:
  // Dynamically create select tag and options based on enum prop
  // Handle updating an existing resource (see ./helpers)
  // Handle default check value

  //? Alternate approach:
  // Store collection of input components on same level as parent component.
  // Pass down inputs, initial state, and handleSubmit
  // Would we need to use cloneElement?

  const [formData, setFormData] = useState(handleInitialState(inputFields))

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <form onSubmit={() => handleSubmit(formData)}>
      {Object.keys(inputFields).map((key) => (
        <div key={key}>
          <label htmlFor={key}>
            {formatLabel(key)}
          </label>
          <input
            id={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required={isRequired(key, inputFields)}
            type={formatInputType(key, inputFields)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form