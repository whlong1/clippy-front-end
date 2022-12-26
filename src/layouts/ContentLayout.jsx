import { Outlet } from "react-router-dom"
const ContentLayout = ({ menu }) => {
  return (
    <main>
      {menu}
      <Outlet />
    </main>
  )
}

export default ContentLayout