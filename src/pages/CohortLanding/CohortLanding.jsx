import "./CohortLanding.css"

// Components
import SelectCohort from "../../components/SelectCohort/SelectCohort"

// Assets
import PinkOnWhiteSq from "../../assets/logos/logotypes/logotype-sq-p.svg"
import WhiteOnPinkSq from "../../assets/logos/logotypes/logotype-sq-w.svg"
import WhiteOnPinkCirc from "../../assets/logos/logotypes/logotype-ci-w.svg"
import PinkOnWhiteCirc from "../../assets/logos/logotypes/logotype-ci-p.svg"
import BlueOnBlackSq from "../../assets/logos/logotypes/logotype-sq-b-dark.svg"
import BlueOnWhiteSq from "../../assets/logos/logotypes/logotype-sq-b-light.svg"
import BlueOnBlackCirc from "../../assets/logos/logotypes/logotype-ci-b-dark.svg"
import BlueOnWhiteCirc from "../../assets/logos/logotypes/logotype-ci-b-light.svg"

const CohortLanding = (props) => {

  const picklogo = (num) => {
    switch (num) {
      case 1:
        return <img src={PinkOnWhiteSq} alt="Abstract flamingo" />
      case 2:
        return <img src={WhiteOnPinkSq} alt="Abstract flamingo" />
      case 3:
        return <img src={BlueOnWhiteSq} alt="Abstract flamingo" />
      case 4:
        return <img src={BlueOnBlackSq} alt="Abstract flamingo" />
      case 5:
        return <img src={WhiteOnPinkCirc} alt="Abstract flamingo" />
      case 6:
        return <img src={PinkOnWhiteCirc} alt="Abstract flamingo" />
      case 7:
        return <img src={BlueOnWhiteCirc} alt="Abstract flamingo" />
      case 8:
        return <img src={BlueOnBlackCirc} alt="Abstract flamingo" />
      default:
        return <img src={PinkOnWhiteSq} alt="Abstract flamingo" />
    }
  }

  return (
    <main className="landing">
      <header>
        <h1>Welcome back to</h1>
        <SelectCohort {...props} />
      </header>
      <section>
        {picklogo(4)}
      </section>
    </main>
  )
}

export default CohortLanding