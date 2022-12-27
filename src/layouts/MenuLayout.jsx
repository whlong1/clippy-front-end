import SelectCohort from "../components/SelectCohort/SelectCohort"

const MenuLayout = ({ user, children }) => {
  return (
    <nav>
      <SelectCohort />
      {children}
    </nav>
  )
}

export default MenuLayout