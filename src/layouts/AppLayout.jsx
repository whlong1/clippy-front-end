// import { Outlet } from "react-router-dom"
import Nav from '../components/Nav/Nav'

const AppLayout = ({ children }) => {
  // should this hold the main tag and footer?
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default AppLayout