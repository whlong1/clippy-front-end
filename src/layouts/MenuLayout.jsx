import SelectCohort from "../components/SelectCohort/SelectCohort"

const MenuLayout = (props) => {
  return (
    <nav>
      <SelectCohort {...props} />
      {props.children}
    </nav>
  )
}

export default MenuLayout