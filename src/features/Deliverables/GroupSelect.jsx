import Select from 'react-select'

const GroupSelect = ({ student, handleSquad }) => {
  const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'grey', label: 'Black' },
    { value: 'pink', label: 'Pink' },
  ]

  const styles = {
    // Styles options inside the select
    option: (styles, state) => ({
      ...styles,
      width: '16px',
      height: '16px',
      cursor: 'pointer',
      margin: '2px 0px',
      borderRadius: '50%',
      color: 'transparent',
      backgroundColor: state.data.value,
      ...(state.isSelected && { backgroundColor: state.data.value }),
    }),
    // Styles the selected option
    singleValue: (styles, state) => ({
      ...styles,
      margin: '0',
      width: '16px',
      height: '16px',
      padding: '0px',
      borderRadius: '50%',
      color: 'transparent',
      backgroundColor: state.data.value,
    }),
    menu: (styles, state) => ({
      ...styles,
      width: '20px',
      margin: '4px 0',
      borderRadius: '14px',
      padding: '2px 11px 0px',
      flexDirection: 'column',
      border: '1px solid blue',
    }),
    menuList: (state) => ({
      ...state,
      height: '100%',
      borderRadius: '0',
      overflow: 'visible',
      padding: '0px 0px 2px',
      flexDirection: 'column',
    }),
    control: (styles, state) => ({
      ...styles,
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }),
    container: (styles, state) => ({
      ...styles,
      width: '24px',
      height: '24px',
      padding: '2px',
      display: 'flex',
      borderRadius: '50%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '.75px solid red',
    }),
    dropdownIndicator: () => ({ display: 'none' }),
    indicatorSeparator: () => ({ display: 'none' }),
  }

  const handleChange = (option) => {
    handleSquad(student.profileId, { squad: option.value })
  }

  return (
    <Select
      unstyled={true}
      styles={styles}
      options={options}
      // menuIsOpen={true}
      isSearchable={false}
      onChange={handleChange}
      defaultValue={options.find((o) => o.value === student.squad)}
    />
  )
}

export default GroupSelect