import Select from 'react-select'

const GroupSelect = () => {
  const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ]

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
    console.log('Option Object', option)
  }

  return (
    <Select
      options={options}
      styles={colourStyles}
      onChange={handleChange}
      defaultValue={options[0]}
    />
  )
}

export default GroupSelect