// import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'
import Router from './components/Router/Router'

const App = () => {
  const { user } = useAuth0()
  console.log('Current auth0 user:', user)

  return (
    <>
      <NavBar />
      <Router />
    </>
  )
}

export default App