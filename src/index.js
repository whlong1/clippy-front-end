import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_CALLBACK_URL}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
)