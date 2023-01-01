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
  // Need to pass down submit button text!
  // If updating a resource, pass in initialState, access value in initialState with key, set placeholder

  // How to catch default?
  // How to catch lowercase?
  // How to catch required?

  const test = Object.keys(inputFields)
  console.log('keys in inputFields object', test)


  // HELPERS
  const formatLabel = (key) => (
    // RegEx Source: https://tinyurl.com/2cyyreb4
    key.charAt(0).toUpperCase() + key.slice(1).replace(/[A-Z]/g, ' $&').trim()
  )

  const typeLookup = {
    Date: 'date',
    String: 'text',
    Number: 'number',
    Boolean: 'checkbox',
  }

  // Note on the name property (type.name) used below:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name


  const formatType = (key) => (
    typeLookup[inputFields[key].type.name]
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
            type={formatType(key)}
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
