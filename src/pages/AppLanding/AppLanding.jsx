import './AppLanding.css'

// Components
import LoginButton from '../../components/LoginButton/LoginButton'
import SignupButton from '../../components/SignupButton/SignupButton'

// Assets
import BlueOnBlackSq from "../../assets/logos/logotypes/logotype-sq-b-dark.svg"
import quackSound from '../../assets/audio/quack.mp3'

const AppLanding = () => {

  const quack = new Audio(quackSound)

  const makeItQuack = () => {
    quack.play()
  }

  return (
    <main className="appLanding">
      <img onClick={makeItQuack} src={BlueOnBlackSq} alt="Abstract flamingo" />
      <section>
        <LoginButton />
        <SignupButton />
      </section>
    </main>
  )
}

export default AppLanding