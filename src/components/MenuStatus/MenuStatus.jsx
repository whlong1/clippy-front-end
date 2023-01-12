import MenuLayout from "../../layouts/MenuLayout"

//? Displays the status of data within a menu
const MenuStatus = (props) => {
  // Replace status text with graphic or animation
  return (
    <MenuLayout {...props}>
      {props.status}
    </MenuLayout>
  )
}

export default MenuStatus
