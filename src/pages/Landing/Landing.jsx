import LoginButton from '../../components/LoginButton/LoginButton'
import SignupButton from '../../components/SignupButton/SignupButton'

const Landing = () => {
  // Add conditional messages based on user/profile
  return (
    <main>
      <h1>Clippy</h1>
      <LoginButton/>
      <SignupButton/>
    </main>
  )
}

export default Landing