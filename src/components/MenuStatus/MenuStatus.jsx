import MenuLayout from "../../layouts/MenuLayout"

//? Displays the status of data within a menu
const MenuStatus = (props) => {
  // Replace status text with graphic or animation
  const msg = props.status[0].toUpperCase() + props.status.slice(1)

  return (
    <MenuLayout {...props}>
      {msg}
    </MenuLayout>
  )
}

export default MenuStatus
