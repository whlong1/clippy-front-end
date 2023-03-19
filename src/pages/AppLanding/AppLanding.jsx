import './AppLanding.css'

// Components
import LoginButton from '../../components/LoginButton/LoginButton'
import SignupButton from '../../components/SignupButton/SignupButton'

// Assets
import BlueOnBlackSq from "../../assets/logos/logotypes/logotype-sq-b-dark.svg"

const AppLanding = () => {
  return (
    <main className="appLanding">
      <img src={BlueOnBlackSq} alt="Abstract flamingo" />
      <section>
        <LoginButton />
        <SignupButton />
      </section>
    </main>
  )
}

export default AppLanding