import Select from 'react-select'

const GroupSelect = ({ squad }) => {
  const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'black', label: 'Black' },
  ]

  // default value check options[0]
  // after change, do all sds update?
  // how to handle state

  const colourStyles = {
    // Styles options inside the select
    option: (styles, state) => {
      return {
        ...styles,
        color: 'transparent',
        backgroundColor: state.data.value,
        ...(state.isSelected && { backgroundColor: state.data.value }),
      }
    },
    // Styles the selected option
    singleValue: (styles, state) => {
      return {
        ...styles,
        color: 'transparent',
        backgroundColor: state.data.value,
      }
    },
  }

  const handleChange = (option) => {
    console.log('change')
    console.log('Option Object', option)
  }

  return (
    <Select
      options={options}
      styles={colourStyles}
      onChange={handleChange}
      defaultValue={options.find((o) => o.value === squad)}
    />
  )
}

export default GroupSelect