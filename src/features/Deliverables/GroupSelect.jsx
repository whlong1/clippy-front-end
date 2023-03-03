import Select from 'react-select'

const GroupSelect = ({ student, handleSquad }) => {
  const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'black', label: 'Black' },
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
    console.log('change')
    console.log('Option Object', option)
    handleSquad(student.profileId, { squad: option.value })
  }

  return (
    <Select
      options={options}
      styles={colourStyles}
      onChange={handleChange}
      defaultValue={options.find((o) => o.value === student.squad)}
    />
  )
}

export default GroupSelect