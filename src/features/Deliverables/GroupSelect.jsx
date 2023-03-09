import Select from 'react-select'

const GroupSelect = ({ student, handleSquad }) => {
  const options = [
    { value: '#B22222', label: 'red' },
    { value: '#1E90FF', label: 'blue' },
    { value: '#006400', label: 'green' },
    { value: '#808080', label: 'black' },
    { value: '#FF69B4', label: 'pink' },
    {value: '#FFD700', label: 'yellow'},
    {value: '#800080', label: 'purple'},
  ]


  /*
  Red: #FF7F7F(lighter shade), #B22222(darker shade)
  Blue: #ADD8E6(lighter shade), #1E90FF(darker shade)
  Yellow: #FFFF99(lighter shade), #FFD700(darker shade)
  Green: #90EE90(lighter shade), #006400(darker shade)
  Orange: #FFA07A(lighter shade), #FF8C00(darker shade)
  Purple: #D8BFD8(lighter shade), #800080(darker shade)
  Pink: #FFC0CB(lighter shade), #FF69B4(darker shade)
  Grey: #D3D3D3(lighter shade), #808080(darker shade)
  */

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