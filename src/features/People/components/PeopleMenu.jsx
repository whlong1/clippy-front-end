import MenuLayout from '../../../layouts/MenuLayout'

const PeopleMenu = (props) => {
  const { people } = props
  console.log('People in selected cohort', people)

  return (
    <MenuLayout {...props}>
      <p>People Menu</p>
    </MenuLayout>
  )
}

export default PeopleMenu