import { useAuth0 } from "@auth0/auth0-react"
import logoutIcon from '../../assets/icons/nav/logout.svg'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      <img src={logoutIcon} alt="logout" />
    </button>
  )
}

export default LogoutButton