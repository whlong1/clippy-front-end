const typeLookup = {
  Date: 'datetime-local',
  String: 'text',
  Number: 'number',
  Boolean: 'checkbox',
}

const formatInputType = (key, fields) => (
  // Notes on the name property (type.name) used below:
  // The type property here is returning a function (String(), Number(), etc...)
  // We need the stringified name of the function to access the HTML type from the lookup table.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeLookup[fields[key].type.name]
)

const handleInitialState = (fields) => {
  // Will need refactor for update functionality:
  const state = Object.keys(fields).reduce((obj, key) => {
    // Check text input
    if (formatInputType(key, fields) === 'text') {
      obj[key] = ''
    }
    // Check date
    if (formatInputType(key, fields) === 'datetime-local') {
      const date = new Date()
      obj[key] = date.toISOString().slice(0, 16)
    }
    // Check defaults on select tags, number inputs and booleans
    if (fields[key].enum || formatInputType(key, fields) === 'number' || formatInputType(key, fields) === 'checkbox') {
      obj[key] = fields[key].default
    }
    return obj
  }, {})
  return state
}

const formatLabel = (key) => (
  // RegEx Source: https://tinyurl.com/2cyyreb4
  key.charAt(0).toUpperCase() + key.slice(1).replace(/[A-Z]/g, ' $&').trim()
)

const isRequired = (key, fields) => (
  fields[key].required
)

export {
  formatLabel,
  isRequired,
  formatInputType,
  handleInitialState,
}

  // NOTES
  // Goal: drop entire schema's in a data file, programatically generate form

  // Need to:
  // check for type boolean - set default
  // check for props like lowercase true
  // check for props like enum and default
  // could build different cb functions to produce different inputs types
  // Need to pass down submit button text!
  // If updating a resource, pass in initialState, access value in initialState with key, set placeholder

  // How to catch default?
  // need handleInitialState function
  // add keys and any default values
  // we'll need this step for handling updates anyway
  // How to catch lowercase?
  // How to catch required?

  // if inputFields[key].enum, needs to be a select
  // then need to make through enum values and produce option tags

  // Default val for a date needs an extra conversion