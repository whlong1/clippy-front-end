import { useNavigate } from "react-router-dom"

const Onboarding = () => {
  const navigate = useNavigate()

  const handleOnboarding = async () => {
    // Make request to update profile...
    navigate('/')
  }

  return (
    <main>
      <h1>Onboarding</h1>
      <button onClick={handleOnboarding}>
        Complete Onboarding
      </button>
    </main>
  )
}

export default Onboarding