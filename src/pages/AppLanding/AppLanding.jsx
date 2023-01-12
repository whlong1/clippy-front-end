import LoginButton from '../../components/LoginButton/LoginButton'
import SignupButton from '../../components/SignupButton/SignupButton'

const AppLanding = () => {
  // Add conditional messages based on user/profile
  return (
    <main className="page">
      <h1>Clippy</h1>
      <LoginButton/>
      <SignupButton/>
    </main>
  )
}

export default AppLanding