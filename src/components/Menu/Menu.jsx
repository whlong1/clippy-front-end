import { useLocation, Routes } from "react-router-dom"

const Menu = () => {
  const { pathname } = useLocation()
  console.log('test', pathname)


  return (
    <aside>
      menu




    </aside>
  )
}

export default Menu