import { useState } from 'react'

// Helpers
import {
  isRequired,
  formatLabel,
  formatInputType,
  handleInitialState,
} from './helpers'

const Form = ({ inputFields, handleSubmit }) => {
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