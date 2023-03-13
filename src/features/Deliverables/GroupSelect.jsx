import Select from 'react-select'

const GroupSelect = ({ student, handleSquad }) => {

  // eslint-disable-next-line
  const ikea = [
    { value: '#DB4C4C', label: 'red' },
    { value: '#FFA036', label: 'orange' },
    { value: '#FEE635', label: 'yellow' },
    { value: '#70C760', label: 'green' },
    { value: '#5B8FD8', label: 'blue' },
    { value: '#B790CA', label: 'purple' },
    { value: '#FFA5C0', label: 'pink' },
    { value: '#5E5E5E', label: 'black' },
  ]

  // eslint-disable-next-line
  const skittles = [
    { value: '#CC0000', label: 'red' },
    { value: '#FF6600', label: 'orange' },
    { value: '#F9A602', label: 'yellow' },
    { value: '#56A64B', label: 'green' },
    { value: '#0077C9', label: 'blue' },
    { value: '#A971B1', label: 'purple' },
    { value: '#FF6B9E', label: 'pink' },
    { value: '#404040', label: 'black' },
  ]

  const options = ikea

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
      background: '#101115',
      padding: '2px 11px 0px',
      flexDirection: 'column',
      border: '1px solid #3a3a3a',
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
      border: '.75px solid #3a3a3a',
    }),
    dropdownIndicator: () => ({ display: 'none' }),
    indicatorSeparator: () => ({ display: 'none' }),
  }

  const handleChange = (option) => {
    handleSquad(student.profileId, { squad: option.label })
  }

  return (
    <Select
      unstyled={true}
      styles={styles}
      options={options}
      // menuIsOpen={true}
      isSearchable={false}
      onChange={handleChange}
      defaultValue={options.find((o) => o.label === student.squad)}
    />
  )
}

export default GroupSelect